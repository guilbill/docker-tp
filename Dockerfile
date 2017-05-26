FROM buildpack-deps:jessie

COPY app.js /app.js

EXPOSE 3000

RUN curl -O "https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz" \
    && tar -xJf node-v6.10.3-linux-x64.tar.xz -C /usr/local --strip-components=1 \
    && rm node-v6.10.3-linux-x64.tar.xz \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs

CMD ["node", "app.js"]
