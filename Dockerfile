FROM adoptopenjdk/openjdk17:alpine-jre
EXPOSE 9092
ADD target/testingManageBackEnd-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]