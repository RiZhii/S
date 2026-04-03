FROM openjdk:17-slim

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /app

# Install dependencies + ffmpeg
RUN apt-get update && apt-get install -y \
    wget curl unzip gnupg \
    xvfb x11vnc fluxbox \
    fonts-liberation libnss3 \
    dbus-x11 \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# Install Chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google.gpg \
 && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google.gpg] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list \
 && apt-get update \
 && apt-get install -y google-chrome-stable \
 && rm -rf /var/lib/apt/lists/*

# Install Chromedriver
RUN CHROME_VERSION=$(google-chrome --version | grep -oP '\d+\.\d+\.\d+') && \
    wget -q https://chromedriver.storage.googleapis.com/$CHROME_VERSION/chromedriver_linux64.zip && \
    unzip chromedriver_linux64.zip && \
    mv chromedriver /usr/bin/ && chmod +x /usr/bin/chromedriver

# Selenium Server
RUN wget https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.21.0/selenium-server-4.21.0.jar -O /selenium-server.jar

# noVNC
RUN git clone https://github.com/novnc/noVNC.git /opt/novnc

# MediaMTX (WebRTC server)
RUN wget https://github.com/aler9/mediamtx/releases/download/v1.9.3/mediamtx_v1.9.3_linux_amd64.tar.gz && \
    tar -xzf mediamtx_v1.9.3_linux_amd64.tar.gz -C /usr/local/bin/ mediamtx && \
    rm mediamtx_v1.9.3_linux_amd64.tar.gz

COPY mediamtx.yml /etc/mediamtx.yml

# Entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 4444 5900 6080 8554 8889

CMD ["/entrypoint.sh"]