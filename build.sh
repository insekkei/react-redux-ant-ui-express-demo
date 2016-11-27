
tar -zxf node_modules.tar.gz

echo "====== node_modules unpacked ======"

node ./node_modules/webpack/bin/webpack --config ./client/webpack-production.config.js

echo "====== webpack build finished ======"

node ./node_modules/babel-cli/bin/babel server/src -d server/build

echo "====== babel build server finished ======"

node server/build/app.js

echo "====== node start ======"
