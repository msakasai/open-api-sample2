module.exports = {
  onPreBuild: async () => {
    await run.command('touch test.html');
  },
}
