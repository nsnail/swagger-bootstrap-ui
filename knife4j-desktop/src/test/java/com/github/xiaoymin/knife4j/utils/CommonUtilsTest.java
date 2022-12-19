package com.github.xiaoymin.knife4j.utils;

import cn.hutool.core.lang.Assert;
import com.github.xiaoymin.knife4j.common.utils.CommonUtils;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/12/19 20:49
 * @since:knife4j-desktop
 */
@Slf4j
public class CommonUtilsTest {

    @Test
    public void testIsJson(){
        log.info("test is json");
        String content="aaa";
        log.info("content:{}",content);
        Assert.isFalse(CommonUtils.isJson(content));
        content="{\n" +
                "    \"l1\": {\n" +
                "        \"l1_1\": [\n" +
                "            \"l1_1_1\",\n" +
                "            \"l1_1_2\"\n" +
                "        ],\n" +
                "        \"l1_2\": {\n" +
                "            \"l1_2_1\": 121\n" +
                "        }\n" +
                "    },\n" +
                "    \"l2\": {\n" +
                "        \"l2_1\": null,\n" +
                "        \"l2_2\": true,\n" +
                "        \"l2_3\": {}\n" +
                "    }\n" +
                "}";
        log.info("content:{}",content);
        Assert.isTrue(CommonUtils.isJson(content));
        content="{\n" +
                "    \"l1\": \n" +
                "        \"l1_1\": [\n" +
                "            \"l1_1_1\",\n" +
                "            \"l1_1_2\"\n" +
                "        ],\n" +
                "        \"l1_2\": {\n" +
                "            \"l1_2_1\": 121\n" +
                "        }\n" +
                "    },\n" +
                "    \"l2\": {\n" +
                "        \"l2_1\": null,\n" +
                "        \"l2_2\": true,\n" +
                "        \"l2_3\": {}\n" +
                "    }\n" +
                "}";
        log.info("content:{}",content);
        Assert.isFalse(CommonUtils.isJson(content));
    }
}
