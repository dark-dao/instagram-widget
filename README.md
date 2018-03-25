# instagram-widget

### Instagram-виджет
```
npm i
npm run start
```

###### Использование:
```
<InstagramWidget
  accessToken='токен для Instagram Api'
/>
```
###### Параметры:
```
accessToken: string - токен для Instagram Api
showPosts: bool - Показывать личные посты
showMediaByTag: string - Показ личных постов у которых есть заданный хештэг (хештэг должен быть записан без символа #)
elementsCount: number - Количество отображаемых постов (если указан 0, то отображаются все найденные посты)
При клике на картинку происходит переход на (instagram.com) сраницу с постом

P.S
Получить accessToken можно на сайте http://instagram.pixelunion.net/

```
___
### Примеры:
###### Показать первые 9 личных постов:
```
<InstagramWidget
  accessToken='your access token'
  showPosts={true}
  elementsCount={9}
/>
```
###### Результат:
![Image](https://github.com/dark-dao/instagram-widget/blob/master/self-first-nine-posts.PNG?raw=true)

___

###### Показать личные посты с хэштегом #tea
```
<InstagramWidget
  accessToken='your access token'
  showPosts={false}
  elementsCount={0}
  showMediaByTag='tea'
/>
```
###### Результат:
![Image](https://github.com/dark-dao/instagram-widget/blob/master/filter-by-tag.PNG?raw=true)
