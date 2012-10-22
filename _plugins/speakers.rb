module Jekyll
  
  class SpeakersIndex < Page
    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"
      
      self.read_yaml(File.join(base, '_layouts'), 'speakers.html')
      self.data['speakers'] = self.get_speakers(site)
      self.process(@name)
      
      
    end

    def get_speakers(site)
      {}.tap do |speakers|
        Dir['_speakers/*.yml'].each do |path|
          name   = File.basename(path, '.yml')
          config = YAML.load(File.read(File.join(@base, path)))
          speakers[name] = config
        end
      end
    end
  end

  class PersonIndex < Page
    def initialize(site, base, dir, path)
      @site     = site
      @base     = base
      @dir      = dir
      @name     = "index.html"
      
      person = YAML.load(File.read(File.join(@base, path)))
      self.read_yaml(File.join(base, '_layouts'), 'person.html')
      self.data['speaker'] = person
      self.data['title'] = person["name"]
      self.process(@name)
    end
  end

  class GenerateSpeakers < Generator
    safe true
    priority :normal

    def generate(site)
      write_speakers(site)
    end

    # Loops through the list of Speakers pages and processes each one.
    def write_speakers(site)
      puts "Creating Speakers Pages"
      if Dir.exists?('_speakers')
        Dir.chdir('_speakers')
        Dir["*.yml"].each do |path|
          name = File.basename(path, '.yml')
          self.write_person_index(site, "_speakers/#{path}", name)
        end

        Dir.chdir(site.source)
        self.write_speakers_index(site)
      end
    end

    # Create List of speaker page
    def write_speakers_index(site)
      speakers = SpeakersIndex.new(site, site.source, "/speakers/")
      speakers.render(site.layouts, site.site_payload)
      speakers.write(site.dest)
      site.pages << speakers
      site.static_files << speakers
    end

    # Create single page for each speaker
    def write_person_index(site, path, name)
      puts "Creating /speakers/#{name}"
      person = PersonIndex.new(site, site.source, "/speakers/#{name}", path)
      person.render(site.layouts, site.site_payload)
      person.write(site.dest)
      site.pages << person
      site.static_files << person
      puts "Done : Creating /speakers/#{name}"
      
    end
  end



  module SpeakersPathFilter
    def speakers_path(text)
      text = '' if text.nil?
      text.to_str.downcase.gsub(' ', '-')
    end
  end
end

Liquid::Template.register_filter(Jekyll::SpeakersPathFilter)