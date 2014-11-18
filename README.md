horizAlign
==========

Aligne horizontalement un élément absolu par rapport à son parent relatif à largeur variable.

**Dans cette documentation**

1. [Utilisation](#utilisation)

## Utilisation

```html
<ol class="mycustomclass">
    <li>
        <a href="page1" title="">Page 1</a>
    </li>
    <li>
        <a href="page2" title="">Page 2</a>
        <ul>
            <li><a href="page2-1" title="">Page 2-1</a></li>
            <li><a href="page2-2" title="">Page 2-2</a></li>
        </ul>
    </li>
</ol>
```

```javascript
$('ol.mycustomclass ul').horizAlign ('> a');
```

* 'ol.mycustomclass ul': correspond à l'élément absolu à aligner ;
* '> a': correpond à la référence "mère" sur laquelle baser l'alignement (en partant du parent direct de this).
