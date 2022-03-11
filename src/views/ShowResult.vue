<template>
    <div>
        <el-card>
            <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`关系抽取(${state.relationExtraction.length})`" name="first">
                    <el-table :data="state.relationExtraction" :show-header="false" style="width: 100%">
                        <el-table-column>
                            <template #default="scope">
                                <span class="message-title">{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane :label="`实体抽取(${state.smartQA.length})`" name="second">
                    <template v-if="message === 'second'">
                        <el-table :data="state.smartQA" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template #default="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`智能问答(${state.entityRecognition.length})`" name="third">
                    <template v-if="message === 'third'">
                        <el-table :data="state.entityRecognition" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template #default="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                        </el-table>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
        </el-card>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "tabs",
    setup() {
        const message = ref("first");
        const state = reactive({
            relationExtraction: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "所属传承人 => 民间故事",
                },
                {
                    date: "2018-04-19 21:00:00",
                    title: "#1 顿珠=> #24藏北嘉黎民间故事",
                },
            ],
            smartQA: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "你问我答",
                },
            ],
            entityRecognition: [
                {
                    date: "2018-04-19 20:00:00",
                    title: "民间故事",
                },
                {
                    date: "2018-04-19 20:00:00",
                    title: "传承人",
                },
            ],
        });

        return {
            message,
            state,
        };
    },
};
</script>

<style>
.message-title {
    cursor: pointer;
}
.handle-row {
    margin-top: 30px;
}
</style>

