#!/bin/bash
set -e

echo "Starting Selenium Browser Container..."

# DBus
mkdir -p /run/dbus
dbus-daemon --system --fork || true

# Xvfb
echo "Starting Xvfb..."
Xvfb :99 -screen 0 1280x720x24 &
export DISPLAY=:99
sleep 2

# Window manager
echo "Starting Fluxbox..."
fluxbox &

# VNC
echo "Starting x11vnc..."
x11vnc -display :99 -rfbport 5900 -nopw -forever -shared &

# noVNC
echo "Starting noVNC..."
/opt/novnc/utils/novnc_proxy --vnc localhost:5900 --listen 6080 &

# Selenium
echo "Starting Selenium Server..."
java -jar /selenium-server.jar standalone \
  --host 0.0.0.0 \
  --port 4444 &

# -------------------------------
# MediaMTX (WebRTC server)
# -------------------------------
echo "Starting MediaMTX..."
mediamtx /etc/mediamtx.yml &

# -------------------------------
# FFmpeg (screen → RTSP)
# -------------------------------
echo "Starting FFmpeg stream..."

ffmpeg -nostdin -f x11grab \
  -video_size 1280x720 \
  -i :99 \
  -vcodec libx264 \
  -preset ultrafast \
  -tune zerolatency \
  -pix_fmt yuv420p \
  -f rtsp rtsp://localhost:8554/mystream &

echo "Container READY"

tail -f /dev/null