#! /bin/bash

# Extract account information from CommuniGate files and convert to LDIF
# format useful for importing into OpenLDAP.

set -u
set -e

# Default CommuniGate Domain

DEF_DOMAIN='fg-networking.de'
DEF_ACCOUNT_DIR='/srv/mail/communigate/Accounts'
ACCOUNT_DIRS=$(/bin/ls -1d "${DEF_ACCOUNT_DIR}"/*.macnt)

# Additional Domains

DOMAIN_ACCOUNT_DIRS='/srv/mail/communigate/Domains/schabler.de /srv/mail/communigate/Domains/worden.de'
for D in ${DOMAIN_ACCOUNT_DIRS}; do
  ACCOUNT_DIRS="${ACCOUNT_DIRS} $(/bin/ls -1d "${D}"/*.macnt)"
done

for A in ${ACCOUNT_DIRS}; do
  DOMAIN=${DEF_DOMAIN}
  echo "${A}" | /bin/fgrep -q /Domains/ &&
    DOMAIN=$(echo "${A}" | /bin/sed 's|^.*Domains/\([^/]*\)/.*$|\1|')
  DC_STRING=$(echo "${DOMAIN}" | /bin/sed 's/^/dc=/;s/\./,dc=/g')
  ACCOUNT_NAME=$(/usr/bin/basename "${A}" .macnt)
  SETTINGS=${A}/account.settings
  REALNAME=$(/bin/sed -n '/RealName/s/^[^"]*"\([^"]*\)".*$/\1/p' "${SETTINGS}")
  test -z "${REALNAME}" && REALNAME="Unknown Name"
  PRENAME=$(echo "${REALNAME}" | /usr/bin/awk '/./{NF--;print}')
  SURNAME=$(echo "${REALNAME}" | /usr/bin/awk '/./{print $NF}')
  QUOTED_PW=$(/bin/sed -n 's/^ Password = \(.*\);$/\1/p' "${SETTINGS}")
  PASSWORD=$(echo "${QUOTED_PW}" | /bin/sed 's/^"//;s/"$//' | /bin/sed 's/\\"/"/g')
  cat <<EOE
dn: uid=${ACCOUNT_NAME},ou=people,${DC_STRING}
objectClass: inetOrgPerson
objectClass: person
uid: ${ACCOUNT_NAME}
sn: ${SURNAME}
givenName: ${PRENAME}
cn: ${REALNAME}
displayName: ${REALNAME}
userPassword: ${PASSWORD}

EOE
done
