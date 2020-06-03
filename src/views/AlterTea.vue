<template>
<div>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                prop="Tno"
                label="工号"
                width="120">
        </el-table-column>
        <el-table-column
                prop="Tname"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="Tsex"
                label="性别"
                width="100">
        </el-table-column>
        <el-table-column
                prop="Tbirthday"
                label="出生日期"
                width="200">
        </el-table-column>
        <el-table-column
                prop="Tphone"
                label="联系方式"
                width="200">
        </el-table-column>
        <el-table-column
                prop="Tpassword"
                label="登录密码"
                width="240">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
<!--                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                <el-button type="text" size="small">编辑</el-button>
            </template>
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
                    Tno: '172747',
                    Tname: '彭程',
                    Tsex: '男',
                    Tbirthday: '1969-05-21',
                    Tphone:'13344789012',
                    Tpassword: 'penghui123'
                }, {
                    Tno: '172748',
                    Tname: '邵宇轩',
                    Tsex: '女',
                    Tbirthday: '1970-01-30',
                    Tphone:'13888107937',
                    Tpassword: 'shaoyj123'
                }, {
                    Tno: '172749',
                    Tname: '卢阡陌',
                    Tsex: '男',
                    Tbirthday: '1990-08-08',
                    Tphone:'15579132456',
                    Tpassword: 'nanshen123'
                }, {
                    Tno: '172750',
                    Tname: '许袁平',
                    Tsex: '男',
                    Tbirthday: '1878-03-25',
                    Tphone:'18790234522',
                    Tpassword: 'xuyping123'
                },
                    {
                        Tno: '172751',
                        Tname: '杜花花',
                        Tsex: '女',
                        Tbirthday: '1980-03-26',
                        Tphone:'13258395751',
                        Tpassword: 'dufafa123'
                    }]
            }
        }
    }
</script>