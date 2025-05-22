FROM mcr.microsoft.com/playwright:v1.52.0-noble
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN apt-get update && \
    apt-get install -y openjdk-17-jre-headless &&\
    JAVA_PATH=$(dirname $(dirname $(readlink -f $(which java)))) && \
    echo "export JAVA_HOME=$JAVA_PATH" >> /etc/bash.bashrc && \
    echo "JAVA_HOME=$JAVA_PATH" >> /etc/environment
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
RUN npx playwright install
CMD [ "/bin/bash", "-c","source /etc/environment && npm run test:docker" ]

