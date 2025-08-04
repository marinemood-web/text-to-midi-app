const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const AutoUnpackNativesPlugin = require('@electron-forge/plugin-auto-unpack-natives');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: 'TextToMidi'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32'],
    },
    {
      name: '@electron-forge/maker-deb',
    },
    {
      name: '@electron-forge/maker-rpm',
    }
  ],
  plugins: [
    new AutoUnpackNativesPlugin(),
    new FusesPlugin({
      version: FuseVersion.V1,
      fuses: {
        [FuseV1Options.RunAsNode]: false,
        [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
        [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      }
    })
  ]
};
