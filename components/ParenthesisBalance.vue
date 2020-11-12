<template>
  <b-card>
    <b-form-input v-model="text" placeholder="Enter Parenthesis"></b-form-input>
    <h5>Delete {{ checkText }} parenthesis to balance the string!</h5>
  </b-card>
</template>

<script>
export default {
  name: `ParenthesisBalance`,
  data() {
    return {
      text: `()())()`,
    }
  },
  computed: {
    checkText() {
      // get the number of ()
      let parenthesisCounts = new Map()
      for (let char of this.text) {
        if (parenthesisCounts.has(char)) {
          let newCount = parenthesisCounts.get(char) + 1
          parenthesisCounts.set(char, newCount)
        } else {
          parenthesisCounts.set(char, 1)
        }
      }
      // check if one is bigger - if so find the difference
      const counts = parenthesisCounts.values()
      const delta = Math.abs(counts.next().value - counts.next().value)
      return delta
    },
  },
}
</script>

<style></style>
