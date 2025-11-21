module Jekyll
  module BibtexCleanup
    def clean_bibtex(input)
      return input unless input.is_a?(String)
      input
        .gsub(/\\pasp\b/i, 'PASP')
        .gsub(/\\apj\b/i,  'ApJ')
        .gsub(/\\nat\b/i,  'Nature')
        .gsub(/\\apjl\b/i, 'ApJL')
        .gsub(/\\mnras\b/i,'MNRAS')
        .gsub(/\\aap\b/i,  'A&A')
        .gsub(/\\aj\b/i,   'AJ')
        # add any other journal macros you use
    end
  end
end

Liquid::Template.register_filter(Jekyll::BibtexCleanup)