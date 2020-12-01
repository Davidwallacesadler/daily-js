<template>
  <div>
    <div>{{ nums }}</div>
    <div>{{ target }}</div>
  </div>
</template>

<script>
// Given an array of integers (nums) and an integer (target)
// return indicies of the two numbers that add up to the target.
export default {
  name: `TwoSum`,
  props: {
    nums: {
      type: Array,
      default: [2, 7, 11, 15],
    },
    target: {
      type: Number,
      default: 9,
    },
  },
  computed: {
    twoSum() {
      const viableNumbers = this.nums.filter((number) => {
        if (number <= this.target) return number
      })
      let firstNumberIndex = 0
      let secondNumberIndex = 1
      while (firstNumberIndex < viableNumbers.length) {
        while (secondNumberIndex < viableNumbers.length) {
          if (
            viableNumbers[firstNumberIndex] +
              viableNumbers[secondNumberIndex] !==
            this.target
          ) {
            secondNumberIndex += 1
          } else {
            return [firstNumberIndex, secondNumberIndex]
          }
        }
        firstNumberIndex += 1
        secondNumberIndex = firstNumberIndex + 1
      }
    },
  },
}
</script>

<style></style>
