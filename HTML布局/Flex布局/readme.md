<!--
 * @Author: your name
 * @Date: 2020-06-25 22:06:09
 * @LastEditTime: 2020-06-29 19:26:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端知识总结\HTML布局\Flex布局\readme.md
--> 

- 原理
  通过给父盒子(Flex direction)添加flex属性，来控制子盒子的位置和排列方式。
  子盒子默认成为块级元素

  父项常见属性：
  flex-direction:设置主轴的方向 X轴 右 侧轴 Y 下 *可以变化

  justify-content:设置主轴上的子元素排列方式

  justify-content: space-between;  /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放置于终点 */
  justify-content: space-around;  /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
  justify-content: space-evenly;  /* 均匀排列每个元素
                                   每个元素之间的间隔相等 */ 
  flex-warp:设置子元素是否换行
  align-content:设置侧轴上的子元素排列方式
  align-items:设置侧轴上的子元素排列方式
  flex-flow：复合属性，相当于同时设置了flex-direction和flex-warp

  align-self 脱离组织 自己对齐
  order 类似于z-index 

 
