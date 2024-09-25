package com.lcf.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.lcf.entity.Article;
import com.lcf.entity.ArticleCategoryDTO;
import com.lcf.mapper.ArticleMapper;
import com.lcf.service.ArticleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements ArticleService {
    @Resource
    private ArticleMapper articleMapper;
    @Override
    public IPage pageCC(IPage<Article> page, Wrapper wrapper) {
        return articleMapper.pageCC(page,wrapper);
    }
    @Override
    public List<String> selectAllArticleTitles() {
        return articleMapper.selectAllArticleTitles(); // 假设你的 mapper 有这个方法
    }

    @Override
    public List<ArticleCategoryDTO> selectArticlesWithCategories() {
        return articleMapper.selectArticlesWithCategories();
    }
}
