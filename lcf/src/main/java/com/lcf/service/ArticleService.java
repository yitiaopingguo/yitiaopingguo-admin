package com.lcf.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.lcf.entity.Article;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
public interface ArticleService extends IService<Article> {
    IPage pageCC(IPage<Article> page, Wrapper wrapper);
}
