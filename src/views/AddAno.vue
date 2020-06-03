<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="Bno"
                    label="公告号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="Bname"
                    label="公告名称"
                    width="220">
            </el-table-column>
            <el-table-column
                    prop="BTime"
                    label="上传时间"
                    width="220">
            </el-table-column>
            <el-table-column
                    prop="Btext"
                    label="公告内容"
                    width="220">
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="100">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {
            return {
                tableData: [{
                    Bno: '1',
                    Bname: '清明节放假',
                    BTime: '2020-02-29 17:37:05',
                    Btext: '清明节当天放假一天',
                }, {
                    Bno: '2',
                    Bname: 'ACM省赛取得佳绩',
                    BTime: '2020-04-23 17:37:58',
                    Btext: '恭喜我校......',
                }, {
                    Bno: '3',
                    Bname: '我校教师王刚获得全国教师一等奖',
                    BTime: '2020-05-04 17:38:52',
                    Btext: '在2020年某月某天，我校教师王刚....',
                }]
            }
        }
    }
</script>