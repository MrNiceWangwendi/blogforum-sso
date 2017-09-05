package com.blogforum.sso.pojo.entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 实体类通用数据基类
 * 
 * @author wwd
 * 
 */
public class DataEntity<T> extends BaseEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// 创建时间
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date createDate; 
	// 创建人
	private String createUser; 
	// 最后修改时间
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date updateDate; 
	// 最后修改人
	private String updateUser; 

	public DataEntity() {
	}



	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}


	public Date getCreateDate() {
		return createDate;
	}



	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}



	public Date getUpdateDate() {
		return updateDate;
	}



	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}



	public String getUpdateUser() {
		return updateUser;
	}

	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}


}
