<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("utf-8"); %>
<jsp:useBean id="mBean" class="pack.member.MemberBean" />
<jsp:setProperty property="*" name="mBean" />
<jsp:useBean id="memberMgr" class="pack.member.MemberManager" />

<%
String id = (String)session.getAttribute("idKey");
boolean b = memberMgr.memberUpdate(mBean, id);


if(b){
%>
 	<script>
 	alert("수정 성공");
 	location.href="../guest/guest_index.jsp";
 	</script>
<%}else{%>
   	<script>
	alert("수정 실패\n관리자에게 문의 바람");
	history.back();
	</script>
<%}%>
