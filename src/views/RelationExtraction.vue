<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <DoSearch></DoSearch>
            </el-col>
            <el-col :span="12">
                <ShowResult></ShowResult>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ShowResult from './ShowResult.vue'
import DoSearch from './DoSearch.vue'
export default {
    name: "relationExtraction",
    components:{
        ShowResult,
        DoSearch,
    }
};
</script>

<style>
</style>