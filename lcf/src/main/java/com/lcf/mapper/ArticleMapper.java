package com.lcf.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.lcf.entity.Article;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.lcf.entity.ArticleCategoryDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
@Mapper
public interface ArticleMapper extends BaseMapper<Article> {
    IPage<Article> pageCC(IPage<Article> page, @Param(Constants.WRAPPER) Wrapper wrapper);

    // 新增方法，查询所有articleTitle
    List<String> selectAllArticleTitles();

    //获取文章分类
    List<ArticleCategoryDTO> selectArticlesWithCategories();

}
