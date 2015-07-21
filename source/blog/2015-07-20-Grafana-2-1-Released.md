---
title: Grafana 2.1 Released
author: Torkel Ödegaard
published_on: July 20, 2015
---

<img class="no-shadow" src="/assets/img/blog/new-in-grafana-v2-1.png" alt="what's new in Grafana 2.1"/>

We've been working to implement many of the features you've requested since the release of 2.0, and are excited to announce the release of Grafana 2.1 today. We recommend that all Grafana users upgrade to this release.

Grafana 2.1 brings improvements in three core areas: dashboarding, authentication, and data sources. 

As with every Grafana release, there is a whole slew of new features, enhancements, and bug fixes. To see everyting that's been added to Grafana 2.1 head over to the <a href="https://github.com/grafana/grafana/issues?page=4&q=milestone%3A2.1+is%3Aclosed" target="_blank">2.1 milestone issues section</a>.

<a href="http://grafana.org/download/">Download Grafana 2.1 now</a>

We're excited about this release, and want to share some of the highlights:

- - -

## More Dynamic Dashboards
<p>The Templating system is one of the most powerful and well-used features of Grafana. The 2.1 release takes Templating to a whole new level, making Dashboards more dynamic than ever before.</p>

<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <img class="no-shadow" src="/assets/img/blog/multi-select.gif" />
  </div>
  <div class="large-4 columns">
  <h3><strong>Multi-Value Template Select</strong></h3>
  <p>Multi-Value Select allows for the selection of multiple template variables.
  These variables can then be used in any Panel to make them more dynamic, and give you the perfect view of your data.
  Multi-Value Select is also a basis for enabling Repeating Rows and Repeating Panels.</p>
  </div>
</div>


<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <img class="no-shadow" src="/assets/img/blog/panel-row-repeat.gif" />
  </div>
  <div class="large-4 columns">
  <h3><strong>Repeating Rows and Panels</strong></h3>
  <p>It’s now possible to create a Dashboard that automatically adds (or removes) both Rows and Panels based on which template variables you have selected.
  Any Row or Any Panel can be configured to repeat (duplicate itself) based on the Multi-Value Template variables selected.</p>
  </div>
</div>


<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <img class="no-shadow" src="/assets/img/blog/panel-link.png" /><br/><br/>
    <img class="no-shadow" src="/assets/img/blog/dashboard_nav.png" />
  </div>
  <div class="large-4 columns">
  <h3><strong>Dashboard Links and Navigation</strong></h3>
  <p>To support better navigation between Dashboarads, it's now possible to create custom and dynamic links from individual Panels to appropriate Dashboards.</p><p>You also have the ability to create flexible top-level links on any given Dashboard thanks to the new Dashboard navigation bar feature.  </p>
  </div>
</div>
<br/>

<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <h3><strong>Better local Dashboard Support</strong></h3>
    <p>Grafana can now index Dashboards saved locally as JSON from a given directory. These dashboards will now show up alongside Dashboards that are stored in the database.</p>
  </div>
  <div class="large-4 columns">
    <blockquote><strong>Note:</strong> Saving local dashboards back to the folder is not supported; this feature is meant for statically generated JSON dashboards.</blockquote>
  </div>
</div>

- - -
<br/>

## Improved Authentication Engine
New authentication methods add numerous options to manage users, roles and organizations. Grafana 2.1 also includes a "Read-only Editor" role which disables the query editor for that user.

<h3><strong>LDAP Support</strong></h3>
<p>This highly requested feature now allows your Grafana instance to authenticate against your existing LDAP-compatible directory servers. You can also specify mappings between LDAP group memberships and Grafana Organization user roles. This feature is still under active development.</p>


<h3><strong>Basic Authentication Support</strong></h3>
<p>You can now authenticate against the Grafana API utilizing a simple username and password with basic HTTP authentication. This can be useful for provisioning and config management systems that need to utilize the API without having to create an API key first.</p>


<h3><strong>User Authentication Utilizing Headers</strong></h3>
<p>You can now authenticate utilizing a header (eg. X-Authenticated-User, or X-WEBAUTH-USER). This can be useful in situations where Grafana is deployed behind a reverse proxy server.</p>





<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <h3><strong>New “Read-only Editor” User Role</strong></h3>
    <p>There is a new User role available in this version of Grafana: “Read-only Editor”. This role disables the query editor for the user and puts him in a read-only sandbox of sorts.</p>
  </div>
  <div class="large-4 columns">
    <blockquote><strong>WARNING</strong> Even with this role assigned, Read-only Editors still have access to ALL metrics from a particular Datasource. This is not a way to achieve a true multitenant segregated environment with Grafana. Please do not use this feature to share sensitive data between multiple untrusted Read-only Editors.</blockquote>
  </div>
</div>


- - -
<br/>

##Improved data source support

<div class="row" style="margin-bottom:20px;">
  <div class="large-4 columns">
    <h3><strong>Improved InfluxDB 0.9 Support</strong></h3>
    <p>We continue to make progress on fully supporting InfluxDB 0.9, but it has proven to be a bit of a moving target. This Grafana release brings a much improved query editor for InfluxDB 0.9 that better supports the current Influx 0.9 query API. We will continue to evolve and improve support for InfluxDB 0.9</p>
  </div>
  <div class="large-8 columns">
    <img class="no-shadow" src="/assets/img/blog/influx-query.gif" style="margin-top:10px;"/>
  </div>
</div>


<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <h3><strong>OpenTSDB Data Source Improvements</strong></h3>
    <p>Grafana now supports template variable values lookup queries, as well as limiting tags by metric.</p>
  </div>
  <div class="large-4 columns">
    <blockquote><strong>Note:</strong> OpenTSDB config option <code>tsd.core.meta.enable_realtime_ts</code> must enabled for OpenTSDB lookup api).</blockquote>
  </div>
</div>



### **New Data Source: KairosDB**
Experimental support for the KairosDB is now shipping in Grafana. Big THANKS! go to <a href="https://github.com/masaori335">Masaori Koshiba</a> and <a href="https://github.com/espenfjo" target="_blank">Espen Fjellvær Olsen</a> for their hard work in making this happen. 

- - -
<br/>

## Panel Improvements
Grafana 2.1 gives you even more flexibility customizing how individual panels render. Overriding the colors of specific series using regular expressions, changing how series stack, and allowing string values will help you better understand your data at a glance.

<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <img class="no-shadow" src="/assets/img/blog/regex_color.gif" />
  </div>
<div class="large-4 columns">
  <h3><strong>Graph Panel</strong></h3>
    <p>Keeping large numbers of metrics in a dashboard visually organized can be confusing. In Grafana 2.1, you can now define series color using regex and variables.</p>   
  </div>
</div>


<div class="row" style="margin-bottom:20px;">
  <div class="large-8 columns">
    <img class="no-shadow" src="/assets/img/blog/negative-y.png" /><br/><br/>
    <img class="no-shadow" src="/assets/img/blog/negative-y-form.png" />
  </div>
<div class="large-4 columns">
  <h3><strong>Series Style Override</strong></h3>
    <p>New series style override, negative-y transform and stack groups.</p>   
  </div>
</div>
  

<br/>



- - -
<br/>


### <a href="http://localhost:4567/download">Download Grafana 2.1 now</a>

- - -
<br/>

## Thanks to project sponsors
* [Squarespace](http://www.squarespace.com)
* [Dreamhost](http://www.dreamhost.com)
* [Demonware](http://www.demonware.net)
* [Mediamath](https://developer.mediamath.com/OpenSource)

<section class="newsletter">
  <form action="http://grafana.us8.list-manage.com/subscribe/post?u=2aeb5711db2aececc990be536&amp;id=5585d37ecc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <row class="collapse">
      <div class="medium-10 columns">
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address">
      </div>
      <div class="medium-2 columns">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button postfix">
      </div>
    </row>
  </form>
</section>


