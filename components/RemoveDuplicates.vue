<template></template>

<script>
export default {
  name: `RemoveDuplicates`,
  props: {
    nums: {
      type: Array,
      default: () => [1, 1, 2],
    },
  },
  computed: {
    numsWithoutDuplicates() {
      let uniques = []
      for (let i = 0; i < this.nums.length; i++) {
        if (!uniques.includes(this.nums[i])) {
          uniques.push(this.nums[i])
        }
      }
    },
  },
}
</script>

<style></style>
