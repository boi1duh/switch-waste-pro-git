import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { products } from '../constants/ProductData';
import SEO from '../components/SEO';

const Search = ({ services, industries, serviceMenuItems }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      let foundResults = [];

      // Search Products
      const productResults = products
        .filter(p => p.name.toLowerCase().includes(lowerCaseQuery) || p.description.toLowerCase().includes(lowerCaseQuery))
        .map(p => ({ type: 'Product', name: p.name, link: '/products', description: p.description }));
      foundResults = [...foundResults, ...productResults];

      // Search Services
      const serviceResults = services
        .filter(s => s.title.toLowerCase().includes(lowerCaseQuery) || s.description.toLowerCase().includes(lowerCaseQuery))
        .map(s => ({ type: 'Service', name: s.title, link: '/services', description: s.description }));
      foundResults = [...foundResults, ...serviceResults];

      // Search Industries
      const industryResults = industries
        .filter(i => i.name.toLowerCase().includes(lowerCaseQuery) || i.items.some(item => item.toLowerCase().includes(lowerCaseQuery)))
        .map(i => ({ type: 'Industry', name: i.name, link: `/${i.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/\//g, '-')}`, description: `Solutions for ${i.name}` }));
      foundResults = [...foundResults, ...industryResults];

      // Search Pages
      const pages = [
        { name: 'About Us', link: '/about', description: 'Learn more about our company, mission, and values.' },
        { name: 'Contact Us', link: '/contact', description: 'Get in touch with our team for quotes and support.' },
        { name: 'Our Clients', link: '/clients', description: 'See the trusted partners we work with.' },
        ...serviceMenuItems.map(item => ({
          name: item,
          link: item === "View All Services" ? "/services" : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
          description: `Learn more about our ${item} service.`
        }))
      ];
      const pageResults = pages
        .filter(p => p.name.toLowerCase().includes(lowerCaseQuery))
        .map(p => ({ type: 'Page', ...p }));
      foundResults = [...foundResults, ...pageResults];

      setResults(foundResults);
    } else {
      setResults([]);
    }
  }, [query, services, industries, serviceMenuItems]);

  return (
    <>
      <SEO title={`Search Results for "${query}"`} description={`Find results for your search query: ${query}`} />
      <div className="container mx-auto px-4 py-12 min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        {query ? (
          <p className="text-lg text-gray-600 mb-8">
            Showing {results.length} results for: <span className="font-semibold text-primary-600">&quot;{query}&quot;</span>
          </p>
        ) : (
          <p className="text-lg text-gray-600 mb-8">Please enter a search term in the header.</p>
        )}

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-semibold uppercase text-primary-600 bg-primary-100 px-2 py-1 rounded-full mr-3">{result.type}</span>
                  <h2 className="text-xl font-semibold text-gray-800">
                    <Link to={result.link} className="hover:underline">{result.name}</Link>
                  </h2>
                </div>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        ) : (
          query && <p>No results found. Please try a different search term.</p>
        )}
      </div>
    </>
  );
};

Search.propTypes = {
  services: PropTypes.array.isRequired,
  industries: PropTypes.array.isRequired,
  serviceMenuItems: PropTypes.array.isRequired,
};

export default Search;