package com.lcf.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lcf.common.QueryPageParam;
import com.lcf.common.Result;
import com.lcf.entity.Article;
import com.lcf.service.ArticleService;
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
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    //新增
    @PostMapping("/save")
    public Result save(@RequestBody Article article) { return articleService.save(article)?Result.suc():Result.fail();}
    //删除
    @GetMapping("/del")
    public Result del(@RequestParam String id){
        return articleService.removeById(id)? Result.suc():Result.fail();
    }

    //更新
    @PostMapping("/update")
    public Result update(@RequestBody Article article) { return articleService.updateById(article)?Result.suc():Result.fail();}

    //查询
    @PostMapping("/listPage")
    public Result listPage(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String articleTitle = (String)param.get("articleTitle");

        Page<Article> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<Article> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(articleTitle) && !"null".equals(articleTitle)){
            lambdaQueryWrapper.like(Article::getArticleTitle,articleTitle);
        }

        IPage result = articleService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }
}
