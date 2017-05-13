// lib/main.js
'use babel';

// This is your main singleton.
// The whole state of your package will be stored and managed here.
const ProseLanguage = {
  activate (state) {
    // Activates and restores the previous session of your package.
  },
  deactivate () {
    // When the user or Atom itself kills a window, this method is called.
  },
  serialize () {
    // To save the current package's state, this method should return
    // an object containing all required data.
  },
  provideSpellCheck () {

    return require.resolve('./spellcheck.js')
  }
};
console.log('Hello!')
export default ProseLanguage;
