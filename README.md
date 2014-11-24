# indeed-js

A client library for using the Indeed Jobsearch API


## Dependencies

Currently the `Indeed` library depends on jQuery. This dependency will be removed in a future release.

## API Credentials

The Indeed API needs to be called with your Indeed publisher number. You must pass this
to the `Indeed` constructor.

```javascript
<script src="indeed.js"></script>

<script type="text/javascript">
    var indeed_client = new Indeed("YOUR_PUBLISHER_NUMBER");
</script>
```

If you do not have a publisher number, you can receive one by heading to the
[Indeed Publisher Portal](https://ads.indeed.com/jobroll/xmlfeed).


## Performing a Job Search

```javascript
<script src="indeed.js"></script>

<script type="text/javascript">
    var indeed_client = new Indeed("YOUR_PUBLISHER_NUMBER");
    indeed_client.search({
        q: 'javascript',
        l: 'austin',
        userip: '1.2.3.4',
        useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2)',
    }, function(search_response){
        //render the jobs from the search_response
    });
</script>
```

## API Paramaters

**q** - 
Query. By default terms are ANDed. To see what is possible, use our [advanced search](http://www.indeed.com/advanced_search) page to perform a search and then check the url for the q value.

**l** - 
Location. Use a postal code or a "city, state/province/region" combination.

**userip** - 
The IP number of the end-user to whom the job results will be displayed. *This field is required*.

**useragent** - 
The User-Agent (browser) of the end-user to whom the job results will be displayed. This can be obtained from the "User-Agent" HTTP request header from the end-user. *This field is required*.

**sort** - 
Sort by relevance or date. Default is relevance.

**radius** - 
Distance from search location ("as the crow flies"). Default is 25.

**start** - 
Start results at this result number, beginning with 0. Default is 0.

**limit** - 
Maximum number of results returned per query. Default is 10, Maximum is 25

**fromage** - 
Number of days back to search.

**highlight** - 
Setting this value to 1 will bold terms in the snippet that are also present in q. Default is 0.

**filter** - 
Filter duplicate results. 0 turns off duplicate job filtering. Default is 1.

**latlong** - 
If latlong=1, returns latitude and longitude information for each job result. Default is 0.

**co** - 
Search within country specified. Default is *us*.
