FROM ubuntu:20.04

RUN apt-get update --fix-missing
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y default-jdk && apt-get install -y maven
RUN export JAVA_HOME="/usr/lib/jvm/java-17-openjdk-amd64"

RUN apt-get install -y nodejs
RUN apt-get install -y npm

COPY . /opt/projet/AGRICA-Groupe
WORKDIR /opt/projet/AGRICA-Groupe
RUN mvn package

ENTRYPOINT ["java","-jar","/opt/projet/AGRICA-Groupe/target/sping-boot-docker-0.0.1-SNAPSHOT.jar"]
