package com.lcf.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lcf.common.QueryPageParam;
import com.lcf.common.Result;
import com.lcf.entity.Project;
import com.lcf.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lcf
 * @since 2024-07-18
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("/save")
    public Result save(@RequestBody Project project) { return projectService.save(project)?Result.suc():Result.fail();}
    //删除
    @GetMapping("/del")
    public Result del(@RequestParam String id){
        return projectService.removeById(id)? Result.suc():Result.fail();
    }

    //更新
    @PostMapping("/update")
    public Result update(@RequestBody Project project) { return projectService.updateById(project)?Result.suc():Result.fail();}

    //根据ID查询一条数据
    @GetMapping("/getById")
    public Result getById(@RequestParam String id) {
        Project project = projectService.getById(id);
        if (project != null) {
            // 查询成功，返回成功的结果和查询到的数据
            return Result.suc(project);
        } else {
            // 查询失败（比如没有找到对应的数据），返回失败的结果
            return Result.fail();
        }
    }

    //查询
    @PostMapping("/listPage")
    public Result listPage(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String title = (String)param.get("title");

        Page<Project> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Project> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(title) && !"null".equals(title)){
            lambdaQueryWrapper.like(Project::getTitle,title);
        }

        // 添加排序条件，按ProjectId降序排列
        lambdaQueryWrapper.orderByDesc(Project::getProjectId);


        IPage result = projectService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }

}
