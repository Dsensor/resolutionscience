<template>
  <div id="key-verify">
    <label class="text-reader">
      Read File
      <input type="file" @change="loadTextFromFile">
    </label>

    <div id="pwinput-prompt" v-if="pwinputSeen">
      Please enter password
      <passwordk v-model="passwordk" :toggle="true" />
      <button @click.prevent="verifyKeypw" class="button is-primary">Verify key ownership</button>
    </div>
  </div>
</template>

<script>
  import Passwordk from 'vue-password-strength-meter'
  // import FileReader from './LandingPage/file-reader.vue'
  import keythereum from 'keythereum'

  export default {
    name: 'unlockkey-page',
    components: {
      Passwordk,
      FileReader
    },
    data: () => ({
      keyObject: {},
      pwinputSeen: false,
      passwordk: null,
      text: '',
      keybuttonseen: false,
      feedbackM: '',
      warningM: ''
    }),
    methods: {
      loadTextFromFile (ev) {
        console.log(ev.target.files[0])
        // prompt for Password

        var address = 'd450dac6421c3e1192bcd45592909065513c34e2'
        // Specify a data directory (optional; defaults to ~/.ethereum)
        console.log(__dirname)
        console.log(process.cwd())
        var datadir = process.cwd() // ev.target.files[0].path
        console.log(datadir)
        this.keyObject = keythereum.importFromFile(address, datadir)
        console.log(this.keyObject)
        this.pwinputSeen = true

        // const file = ev.target.files[0]
        // console.log(file)
        // const reader = new FileReader()
        // reader.onload = e => this.$emit('load', e.target.result)
        // reader.readAsText(file)
      },
      verifyKeypw () {
        // verify key password
        var privateKey = keythereum.recover(this.passwordk, this.keyObject)
        this.passwordk = ''
        console.log(privateKey)
        console.log(privateKey.toString())
      }
    }
  }
</script>

<style>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  /* Fancy button looking */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
