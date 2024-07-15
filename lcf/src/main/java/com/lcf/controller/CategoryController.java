package com.lcf.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lcf.common.QueryPageParam;
import com.lcf.common.Result;
import com.lcf.entity.Category;
import com.lcf.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    //新增
    @PostMapping("/save")
    public Result save(@RequestBody Category category) { return categoryService.save(category)?Result.suc():Result.fail();}
    //删除
    @GetMapping("/del")
    public Result del(@RequestParam String id){
        return categoryService.removeById(id)? Result.suc():Result.fail();
    }

    //更新
    @PostMapping("/update")
    public Result update(@RequestBody Category category) { return categoryService.updateById(category)?Result.suc():Result.fail();}

    //查询
    @PostMapping("/listPage")
    public Result lsitPage(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String categoryName = (String)param.get("categoryName");
        Page<Category> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());
        LambdaQueryWrapper<Category> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(categoryName) && !"null".equals(categoryName)){
            lambdaQueryWrapper.like(Category::getCategoryName,categoryName);
        }
        IPage result = categoryService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }
}
