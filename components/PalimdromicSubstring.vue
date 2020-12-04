<template>
  <div>
    <div>Longest Palimdromic Substring</div>
    <div>Given String: {{ s }}</div>
    <div>Solution: {{ longestPalimdrome }}</div>
  </div>
</template>

<script>
export default {
  name: `PalimdromicSubstring`,
  props: {
    s: {
      type: String,
      default: `babad`,
    },
  },
  computed: {
    longestPalimdrome() {
      const isAPalimdrome = (string) => {
        let stringLength = string.length
        let maxIndex = stringLength - 1
        for (let i = 0; i < stringLength / 2; i++) {
          if (string[i] !== string[maxIndex - i]) {
            return false
          }
        }
        return true
      }
      if (this.s.length > 1) {
        let i = 0
        let j = this.s.length - 1
        let subStrings = []
        while (i < this.s.length) {
          while (j >= i) {
            const subString = this.s.substring(i, j)
            if (isAPalimdrome(subString)) {
              subStrings.push(subString)
            } else {
              j -= 1
            }
          }
          i += 1
          j = this.s.length - 1
        }
        return subStrings.reduce((acc, cur) => {
          acc.length > cur.length ? acc : cur
        })
      } else {
        return this.s
      }
    },
  },
}
</script>

<style></style>
