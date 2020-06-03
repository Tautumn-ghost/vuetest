<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="Sno"
                    label="学号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="Sname"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="Ssex"
                    label="性别"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="Sbirthday"
                    label="出生日期"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="SClass"
                    label="班级"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="Sfaculty"
                    label="学院"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="Sphone"
                    label="联系方式"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="Spassword"
                    label="登录密码"
                    width="140">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <!--                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="100"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage){
                alert(currentPage)
            }
        },

        data() {
            return {
                tableData: [{
                    Sno: '2016261008',
                    Sname: '谭秋月',
                    Ssex: '女',
                    Sbirthday: '1998-08-10',
                    SClass: '软工171班',
                    Sfaculty:'软件工程',
                    Sphone:'13228202170',
                    Spassword: '123456'
                }, {
                    Sno: '2017081086',
                    Sname: '闫国龙',
                    Ssex: '男',
                    Sbirthday: '1999-07-08',
                    SClass: '软工175班',
                    Sfaculty:'软件工程',
                    Sphone:'13325678109',
                    Spassword: '654321'
                }, {
                    Sno: '2017081006',
                    Sname: '罗吉馨',
                    Ssex: '女',
                    Sbirthday: '1998-08-10',
                    SClass: '软工171班',
                    Sfaculty:'软件工程',
                    Sphone:'13228202170',
                    Spassword: '123456'
                }, {
                    Sno: '2017081005',
                    Sname: '洪佳琦',
                    Ssex: '女',
                    Sbirthday: '1999-12-25',
                    SClass: '软工171班',
                    Sfaculty:'软件工程',
                    Sphone:'13228202170',
                    Spassword: '345261'
                },
                    {
                        Sno: '2017082623',
                        Sname: '汪晓玉',
                        Ssex: '女',
                        Sbirthday: '2000-08-24',
                        SClass: '软工171班',
                        Sfaculty:'软件工程',
                        Sphone:'13678053796',
                        Spassword: '097809'
                    }]
            }
        }
    }
</script>