module Jekyll
  class GenerateArchives < Generator
    def generate(site)
      site.posts.docs.group_by { |post| post.date.strftime("%Y-%m") }.each do |ym, posts|
        year, month = ym.split("-")
        month_name = Date::MONTHNAMES[month.to_i]
        site.pages << MonthlyPage.new(site, year, month, month_name, posts)
      end
    end
  end

  class MonthlyPage < Page
    def initialize(site, year, month, month_name, posts)
      @site = site
      @base = site.source
      @dir = "/archives/#{year}/#{month}"
      @name = "index.html"

      self.process(@name)
      self.read_yaml(File.join(@base, "_layouts"), "monthly.html")
      self.data["year"] = year
      self.data["month"] = month
      self.data["month_name"] = month_name
      self.data["posts"] = posts
      self.content = ""
    end
  end
end
