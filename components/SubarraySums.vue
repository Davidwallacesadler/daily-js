<template>
  <div>
    <div>Given Array: {{ intArray }}</div>
    <div>Griven Grouping: {{ groupingSize }}</div>
    <div>Result: {{ subArraySums }}</div>
  </div>
</template>

<script>
export default {
  name: `SubarraySums`,
  props: {
    intArray: {
      type: Array,
      default: () => [5, 1, 2, 7, 3, 4],
    },
    groupingSize: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    subArraySums() {
      const sumTotal = this.intArray.reduce((acc, cur) => {
        return acc + cur
      })
      const averageGroupingMagnitude = Math.ceil(
        sumTotal / this.intArray.length
      )
      let sums = []
      let subArray = []
      this.intArray.forEach((int) => {
        const subArrayMax = subArray.reduce((acc, cur) => {
          return acc + cur
        })
        if (
          subArrayMax < averageGroupingMagnitude &&
          subArray.length < this.groupingSize
        ) {
          subArray.push(int)
        } else {
          sums.push(subArray)
          subArray = []
          subArray.push(int)
        }
      })
      return sums
    },
  },
}
</script>

<style></style>
