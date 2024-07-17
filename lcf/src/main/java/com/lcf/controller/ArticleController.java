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

    //根据ID查询一条数据
    @GetMapping("/getById")
    public Result getById(@RequestParam String id) {
        Article article = articleService.getById(id);
        if (article != null) {
            // 查询成功，返回成功的结果和查询到的数据
            return Result.suc(article);
        } else {
            // 查询失败（比如没有找到对应的数据），返回失败的结果
            return Result.fail();
        }
    }


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

        // 添加排序条件，按articleId降序排列
        lambdaQueryWrapper.orderByDesc(Article::getArticleId);


        IPage result = articleService.pageCC(page,lambdaQueryWrapper);
        return Result.suc(result.getRecords(),result.getTotal());
    }
}
