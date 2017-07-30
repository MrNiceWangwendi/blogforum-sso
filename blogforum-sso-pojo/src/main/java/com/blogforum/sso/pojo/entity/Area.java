/***********************************************************************
 * Module:  Area.java
 * Author:  Administrator
 * Purpose: Defines the Class Area
 ***********************************************************************/
package com.blogforum.sso.pojo.entity;

/** 区域表 */
public class Area extends DataEntity<Area>{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 编号
	 */
	private int id;
	/**
	 * 区域名
	 */
	private String name;
	/**
	 * 上级id
	 */
	private int parentId;
	/**
	 * 删除标记 N为不删除 Y为删除
	 */
	private String delFlag;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getParentId() {
		return parentId;
	}

	public void setParentId(int parentId) {
		this.parentId = parentId;
	}

	public String getDelFlag() {
		return delFlag;
	}

	public void setDelFlag(String delFlag) {
		this.delFlag = delFlag;
	}

	@Override
	public String toString() {
		return "Area [id=" + id + ", name=" + name + ", parentId=" + parentId + ", delFlag=" + delFlag + "]";
	}

}