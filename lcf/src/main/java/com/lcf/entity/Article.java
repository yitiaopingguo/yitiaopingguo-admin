package com.lcf.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
@Data
@EqualsAndHashCode(callSuper = false)
@ApiModel(value="Article对象", description="")
public class Article implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "文章ID")
    @TableId(value = "article_id", type = IdType.AUTO)
    private Integer articleId;

    @ApiModelProperty(value = "用户ID")
    private Integer articleUserId;

    @ApiModelProperty(value = "标题")
    private String articleTitle;

    @ApiModelProperty(value = "内容")
    private String articleContent;

    @ApiModelProperty(value = "访问量")
    private Integer articleViewCount;

    @ApiModelProperty(value = "评论数")
    private Integer articleCommentCount;

    @ApiModelProperty(value = "点赞数")
    private Integer articleDianzanCount;

    @ApiModelProperty(value = "更新时间")
    private LocalDateTime articleUpdateTime;

    @ApiModelProperty(value = "创建时间")
    private LocalDateTime articleCreateTime;

    @ApiModelProperty(value = "摘要")
    private String articleSummary;

    @ApiModelProperty(value = "缩略图")
    private String articleThImg;

    @ApiModelProperty(value = "分类ID")
    private Integer categoryId;

    @ApiModelProperty(value = "分类名称")
    private String categoryName;


}
