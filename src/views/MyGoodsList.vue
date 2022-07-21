<template>
  <div>
    <MyTable :list="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scoped">
        <td>{{ scoped.row.id }}</td>
        <td>{{ scoped.row.goods_name }}</td>
        <td>{{ scoped.row.goods_price }}</td>
        <td>
          <input
            v-focus
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scoped.row.inputVisible"
            @blur="scoped.row.inputVisible = false"
            @keyup.esc="scoped.row.inputVisible = false"
            v-model="scoped.row.inputValue"
            @keyup.enter="addTag(scoped.row)"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scoped.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(item, index) in scoped.row.tags"
            :key="index"
            class="badge badge-warning"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="badge-warning" @click="remove(scoped.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";

export default {
  data() {
    return {
      list: [],
    };
  },
  components: { MyTable },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    remove(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    addTag(val) {
      if (val.inputValue.trim().length == 0) {
        val.inputValue = "";
        alert("内容不能为空");
      }
      val.tags.push(val.inputValue);
      val.inputValue = "";
    },
  },
};
</script>

<style scoped>
.badge {
  margin-right: 15px;
}
</style>
