<template>
  <div>
    <div>Longest Substring</div>
    <div>SubString: {{ s }}</div>
    <div>Longest Substring: {{ lengthOfLongestSubstring }}</div>
  </div>
</template>

<script>
export default {
  name: `LongestSubstring`,
  props: {
    s: {
      type: String,
      default: `abcabcbb`,
    },
  },
  computed: {
    // No repeating chars
    lengthOfLongestSubstring() {
      let substring = ``
      let substrings = []
      for (let character of this.s) {
        if (substring.includes(character)) {
          substrings.push(substring)
          substring = character
        } else {
          substring += character
        }
      }
      substrings.push(substring)
      const maxLength = (acc, cur) => {
        return acc.length > cur.length ? acc : cur
      }
      return substrings.length > 0 ? substrings.reduce(maxLength).length : 0
    },
  },
}
</script>

<style></style>
