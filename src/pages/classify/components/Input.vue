<template>
  <div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea2">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'ClassifyInput',
  data () {
    return {
      textarea2: '1111'
    }
  }
}
</script>

<style scoped>

</style>
