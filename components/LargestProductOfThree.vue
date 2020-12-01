<template></template>

<script>
export default {
  name: `LargestProductOfThree`,
  props: {
    list: {
      type: Array,
      default: () => [-10, -10, 5, 2],
    },
  },
  computed: {
    product() {
      // need to take into account that the numbers could be negative - if so then we need one other neg
      let product = 0
      const listHasAtLeastTwoNegative = () => {
        let negativeCount = 0
        this.list.forEach((number) => {
          if (number < 0) negativeCount += 1
        })
        if (negativeCount > 1) return true
        else return false
      }
      const maxValue = Math.abs(Math.max(this.list))
      const minValue = Math.abs(Math.max(this.list))
      if (minValue > maxValue && listHasAtLeastTwoNegative) {
        if (product === 0) {
          // Need to start the product
          product = minValue
        }
        product = product * minValue
        // we have to use a negative number -- check if there exists another in the list
      } else {
        if (product === 0) {
          product = maxValue
        } else {
          product = product * maxValue
        }
      }
      return product
    },
  },
}
</script>

<style></style>
