echo ⚡⚡⚡⚡ Starting tokens build process
rimraf public/styles
mkdir public/styles
node config.js
echo "Done with building tokens"
echo "Fixing fonts paths"
node scripts/fixFontsPaths.js
# npm run lint:stylelint
echo ⚡⚡⚡⚡ Wrapping up tokens build process
