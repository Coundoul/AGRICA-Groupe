FROM node:latest as builder

RUN mkdir -p /opt/projet/AGRICA-Groupe


WORKDIR /opt/projet/AGRICA-Groupe

RUN npm install -g @angular/cli@15.1.6

COPY . /opt/projet/AGRICA-Groupe


CMD ng serve --host 51.77.132.116 --port 4200