<template>
<div>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="bname"
                label="公告名称"
                width="220">
        </el-table-column>
        <el-table-column
                prop="bno"
                label="公告号"
                width="120">
        </el-table-column>
        <el-table-column
                prop="btime"
                label="上传时间"
                width="220">
        </el-table-column>
        <el-table-column
                prop="btext"
                label="公告内容"
                width="220">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="200">
            <template slot-scope="scope">
<!--                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
<!--    <el-pagination-->
<!--            background-->
<!--            layout="prev, pager, next"-->
<!--            page-size="6"-->
<!--            :total="100">-->
<!--    </el-pagination>-->
</div>
</template>

<script>
    export default {
        // methods: {
        //     handleClick(row) {
        //         console.log(row);
        //     }
        // },
        name:"Bulletin",
        data() {
            return {
                tableData: [{
                }
                ]
            }
        },
        created() {
            var arr = this;
            axios.get("http://localhost:8181/Bulletin/findAll").then(function (response) {
                arr.tableData = response.data;
                console.log(response);
            }).catch(function (reason) {
            })
        }
    }
</script>