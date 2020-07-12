# Fake bank for messing with refund scammers.

Download and install Docker https://hub.docker.com/editions/community/docker-ce-desktop-windows/

How to use,

Powershell commands:

    docker pull frazzlesgrant/fakebank02

    docker run -d -p "your IP Address":443:8080 frazzlesgrant/fakebank02

Edit Host file on VM (C:/windows/system32/drivers/etc/hosts)

       "your IP Address" njcreditunion.com 
       "your IP Address" www.njcreditunion.com/

Download the server.cert from https://github.com/frazzlesgrant1994/fake-bank-scambaiting and install in the "Trusted Root Certification Authorities" this show the site as secure.


## Chrome

There is a simple Chrome extension to add the result to chrome when searching for the bank as well.
