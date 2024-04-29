// import React from 'react'

// const Table = () => {
//   return (
//     <div className="container">


// <div className="table-responsive mt-10">
//     <table className="boot-stratp-table-123 table border border-black">
//         <tr className="bg-blue-500 border border-black">
//             <th rowSpan ="2">SHS B X B MM</th>
//             <th>B</th>
//             <th>B</th>
//             <th>T</th>
//             <th> Sec Area</th>
//             <th>weight</th>
//             <th colSpan="2">Moment of inertia </th>
//             <th colSpan="2">Radius of Gyration</th>
//             <th colSpan="2">Elastic Modulus</th>
//             <th colSpan="2">Torsional Contants </th>
//             <th> Outer surface Area</th>
//             <th> Nominal Length Per Tonne</th>
//         </tr>
//         <tr>
//             <th className="bg-blue-500"> MM </th>
//             <th className="bg-blue-500"> MM </th>
//             <th className="bg-blue-500"> MM </th>
//             <th className="bg-blue-500"> CM^2 </th>
//             <th className="bg-blue-500"> Kg/Mtr </th>
//             <th className="bg-blue-500"> lxx CM^4</th>
//             <th className="bg-blue-500"> lyy CM^4</th>
//             <th className="bg-blue-500"> Rxx CM</th>
//             <th className="bg-blue-500"> Ryy CM</th>
//             <th className="bg-blue-500"> Zxx CM^3 </th>
//             <th className="bg-blue-500"> Zyy CM^3</th>
//             <th className="bg-blue-500"> J Cm^4 </th>
//             <th className="bg-blue-500"> B Cm^3 </th>
//             <th className="bg-blue-500"> Sq.Mtr/ Mtr </th>
//             <th className="bg-blue-500"> M </th>
//         </tr>
//         <tr>
//             <td rowSpan ="2" className="bg-[#A9CCFA]"> 25x25 </td>
//             <td className="bg-[#A9CCFA]">25</td>
//             <td className="bg-[#A9CCFA]">25</td>
//             <td className="bg-[#A9CCFA]">2.6</td>
//             <td className="bg-[#A9CCFA]">2.16</td>
//             <td className="bg-[#A9CCFA]">1.69</td>
//             <td className="bg-[#A9CCFA]">1.72</td>
//             <td className="bg-[#A9CCFA]">1.72</td>
//             <td className="bg-[#A9CCFA]">0.89</td>
//             <td className="bg-[#A9CCFA]">0.89</td>
//             <td className="bg-[#A9CCFA]">1.38</td>
//             <td className="bg-[#A9CCFA]">1.38</td>
//             <td className="bg-[#A9CCFA]">3.04</td>
//             <td className="bg-[#A9CCFA]">2.12</td>
//             <td className="bg-[#A9CCFA]">0.087</td>
//             <td className="bg-[#A9CCFA]">590.92</td>
//         </tr>
//         <tr>
//             <td>25</td>
//             <td>25</td>
//             <td>3.2</td>
//             <td>2.53</td>
//             <td>1.98</td>
//             <td>1.89</td>
//             <td>1.89</td>
//             <td>0.86</td>
//             <td>0.86</td>
//             <td>1.51</td>
//             <td>1.51</td>
//             <td>3.45</td>
//             <td>2.34</td>
//             <td>0.084</td>
//             <td>504.09</td>
//         </tr>
//         <tr>
//             <td rowSpan ="2" className="bg-blue-400"> 32x32 </td>
//             <td className="bg-blue-400">32</td>
//             <td className="bg-blue-400">32</td>
//             <td className="bg-blue-400">2.6</td>
//             <td className="bg-blue-400">2.88</td>
//             <td className="bg-blue-400">2.26</td>
//             <td className="bg-blue-400">4.02</td>
//             <td className="bg-blue-400">4.02</td>
//             <td className="bg-blue-400">1.18</td>
//             <td className="bg-blue-400">1.18</td>
//             <td className="bg-blue-400">2.51</td>
//             <td className="bg-blue-400">2.51</td>
//             <td className="bg-blue-400">6.86</td>
//             <td className="bg-blue-400">3.82</td>
//             <td className="bg-blue-400">0.115</td>
//             <td className="bg-blue-400">441.74</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">32</td>
//             <td className="bg-blue-400">32</td>
//             <td className="bg-blue-400">3.2</td>
//             <td className="bg-blue-400">3.42</td>
//             <td className="bg-blue-400">2.69</td>
//             <td className="bg-blue-400">4.54</td>
//             <td className="bg-blue-400">4.54</td>
//             <td className="bg-blue-400">1.15</td>
//             <td className="bg-blue-400">1.15</td>
//             <td className="bg-blue-400">2.84</td>
//             <td className="bg-blue-400">2.84</td>
//             <td className="bg-blue-400">7.96</td>
//             <td className="bg-blue-400">4.34</td>
//             <td className="bg-blue-400">0.112</td>
//             <td className="bg-blue-400">372.15</td>
//         </tr>
//         <tr>
//             <td rowSpan ="3" className="bg-[#A9CCFA]"> 38x38 </td>
//             <td className="bg-[#A9CCFA]">38</td>
//             <td className="bg-[#A9CCFA]">38</td>
//             <td className="bg-[#A9CCFA]">2.6</td>
//             <td className="bg-[#A9CCFA]">3.51</td>
//             <td className="bg-[#A9CCFA]">2.75</td>
//             <td className="bg-[#A9CCFA]">7.14</td>
//             <td className="bg-[#A9CCFA]">7.14</td>
//             <td className="bg-[#A9CCFA]">1.43</td>
//             <td className="bg-[#A9CCFA]">1.43</td>
//             <td className="bg-[#A9CCFA]">3.76</td>
//             <td className="bg-[#A9CCFA]">3.76</td>
//             <td className="bg-[#A9CCFA]">11.93</td>
//             <td className="bg-[#A9CCFA]">5.69</td>
//             <td className="bg-[#A9CCFA]">0.139</td>
//             <td className="bg-[#A9CCFA]">363.16</td>
//         </tr>
//         <tr>
//             <td>38</td>
//             <td>38</td>
//             <td>3.2</td>
//             <td>4.19</td>
//             <td>3.29</td>
//             <td>8.18</td>
//             <td>8.18</td>
//             <td>1.40</td>
//             <td>1.40</td>
//             <td>4.30</td>
//             <td>4.30</td>
//             <td>14.01</td>
//             <td>6.55</td>
//             <td>0.136</td>
//             <td>303.95</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">38</td>
//             <td className="bg-[#A9CCFA]">38</td>
//             <td className="bg-[#A9CCFA]">4.0</td>
//             <td className="bg-[#A9CCFA]">5.03</td>
//             <td className="bg-[#A9CCFA]">3.95</td>
//             <td className="bg-[#A9CCFA]">9.26</td>
//             <td className="bg-[#A9CCFA]">9.26</td>
//             <td className="bg-[#A9CCFA]">1.36</td>
//             <td className="bg-[#A9CCFA]">1.36</td>
//             <td className="bg-[#A9CCFA]">4.87</td>
//             <td className="bg-[#A9CCFA]">4.87</td>
//             <td className="bg-[#A9CCFA]">16.38</td>
//             <td className="bg-[#A9CCFA]">7.48</td>
//             <td className="bg-[#A9CCFA]">0.131</td>
//             <td className="bg-[#A9CCFA]">253.33</td>
//         </tr>
//         <tr>
//             <td rowSpan ="3" className="bg-blue-400"> 40x40 </td>
//             <td className="bg-blue-400">40</td>
//             <td className="bg-blue-400">40</td>
//             <td className="bg-blue-400">2.6</td>
//             <td className="bg-blue-400">3.72</td>
//             <td className="bg-blue-400">2.92</td>
//             <td className="bg-blue-400">8.45</td>
//             <td className="bg-blue-400">8.45</td>
//             <td className="bg-blue-400">1.51</td>
//             <td className="bg-blue-400">1.51</td>
//             <td className="bg-blue-400">4.22</td>
//             <td className="bg-blue-400">4.22</td>
//             <td className="bg-blue-400">14.06</td>
//             <td className="bg-blue-400">6.39</td>
//             <td className="bg-blue-400">0.147</td>
//             <td className="bg-blue-400">342.83</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">40</td>
//             <td className="bg-blue-400">40</td>
//             <td className="bg-blue-400">3.2</td>
//             <td className="bg-blue-400">4.45</td>
//             <td className="bg-blue-400">3.49</td>
//             <td className="bg-blue-400">9.72</td>
//             <td className="bg-blue-400">9.72</td>
//             <td className="bg-blue-400">1.48</td>
//             <td className="bg-blue-400">1.48</td>
//             <td className="bg-blue-400">4.86</td>
//             <td className="bg-blue-400">4.86</td>
//             <td className="bg-blue-400">16.55</td>
//             <td className="bg-blue-400">7.39</td>
//             <td className="bg-blue-400">0.144</td>
//             <td className="bg-blue-400">286.45</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">40</td>
//             <td className="bg-blue-400">40</td>
//             <td className="bg-blue-400">4.0</td>
//             <td className="bg-blue-400">5.35</td>
//             <td className="bg-blue-400">4.20</td>
//             <td className="bg-blue-400">11.07</td>
//             <td className="bg-blue-400">11.07</td>
//             <td className="bg-blue-400">1.44</td>
//             <td className="bg-blue-400">1.44</td>
//             <td className="bg-blue-400">5.54</td>
//             <td className="bg-blue-400">5.54</td>
//             <td className="bg-blue-400">19.44</td>
//             <td className="bg-blue-400">8.48</td>
//             <td className="bg-blue-400">0.139</td>
//             <td className="bg-blue-400">238.17</td>
//         </tr>
//         <tr>
//             <td rowSpan ="4" className="bg-[#A9CCFA]"> 50x50 </td>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">2.6</td>
//             <td className="bg-[#A9CCFA]">4.76</td>
//             <td className="bg-[#A9CCFA]">3.73</td>
//             <td className="bg-[#A9CCFA]">17.47</td>
//             <td className="bg-[#A9CCFA]">17.47</td>
//             <td className="bg-[#A9CCFA]">1.92</td>
//             <td className="bg-[#A9CCFA]">1.92</td>
//             <td className="bg-[#A9CCFA]">6.99</td>
//             <td className="bg-[#A9CCFA]">6.99</td>
//             <td className="bg-[#A9CCFA]">28.48</td>
//             <td className="bg-[#A9CCFA]">10.54</td>
//             <td className="bg-[#A9CCFA]">0.187</td>
//             <td className="bg-[#A9CCFA]">267.86</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">2.9</td>
//             <td className="bg-[#A9CCFA]">5.25</td>
//             <td className="bg-[#A9CCFA]">4.12</td>
//             <td className="bg-[#A9CCFA]">18.98</td>
//             <td className="bg-[#A9CCFA]">18.98</td>
//             <td className="bg-[#A9CCFA]">1.90</td>
//             <td className="bg-[#A9CCFA]">1.90</td>
//             <td className="bg-[#A9CCFA]">7.59</td>
//             <td className="bg-[#A9CCFA]">7.59</td>
//             <td className="bg-[#A9CCFA]">31.24</td>
//             <td className="bg-[#A9CCFA]">11.47</td>
//             <td className="bg-[#A9CCFA]">0.185</td>
//             <td className="bg-[#A9CCFA]">242.77</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">3.6</td>
//             <td className="bg-[#A9CCFA]">6.35</td>
//             <td className="bg-[#A9CCFA]">4.98</td>
//             <td className="bg-[#A9CCFA]">22.15</td>
//             <td className="bg-[#A9CCFA]">22.15</td>
//             <td className="bg-[#A9CCFA]">1.87</td>
//             <td className="bg-[#A9CCFA]">1.87</td>
//             <td className="bg-[#A9CCFA]">8.86</td>
//             <td className="bg-[#A9CCFA]">8.86</td>
//             <td className="bg-[#A9CCFA]">37.25</td>
//             <td className="bg-[#A9CCFA]">13.43</td>
//             <td className="bg-[#A9CCFA]">0.181</td>
//             <td className="bg-[#A9CCFA]">200.66</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">50</td>
//             <td className="bg-[#A9CCFA]">4.5</td>
//             <td className="bg-[#A9CCFA]">7.67</td>
//             <td className="bg-[#A9CCFA]">6.02</td>
//             <td className="bg-[#A9CCFA]">25.50</td>
//             <td className="bg-[#A9CCFA]">25.50</td>
//             <td className="bg-[#A9CCFA]">1.82</td>
//             <td className="bg-[#A9CCFA]">1.82</td>
//             <td className="bg-[#A9CCFA]">10.20</td>
//             <td className="bg-[#A9CCFA]">10.20</td>
//             <td className="bg-[#A9CCFA]">44.09</td>
//             <td className="bg-[#A9CCFA]">15.56</td>
//             <td className="bg-[#A9CCFA]">0.177</td>
//             <td className="bg-[#A9CCFA]">166.10</td>
//         </tr>
//         <tr>
//             <td rowSpan ="4" className="bg-blue-400"> 60x60 </td>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">2.6</td>
//             <td className="bg-blue-400">5.80</td>
//             <td className="bg-blue-400">4.55</td>
//             <td className="bg-blue-400">31.33</td>
//             <td className="bg-blue-400">31.33</td>
//             <td className="bg-blue-400">2.33</td>
//             <td className="bg-blue-400">2.33</td>
//             <td className="bg-blue-400">10.44</td>
//             <td className="bg-blue-400">10.44</td>
//             <td className="bg-blue-400">50.38</td>
//             <td className="bg-blue-400">15.72</td>
//             <td className="bg-blue-400">0.227</td>
//             <td className="bg-blue-400">219.80</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">3.2</td>
//             <td className="bg-blue-400">7.01</td>
//             <td className="bg-blue-400">5.50</td>
//             <td className="bg-blue-400">36.94</td>
//             <td className="bg-blue-400">36.94</td>
//             <td className="bg-blue-400">2.30</td>
//             <td className="bg-blue-400">2.30</td>
//             <td className="bg-blue-400">12.31</td>
//             <td className="bg-blue-400">12.31</td>
//             <td className="bg-blue-400">60.34</td>
//             <td className="bg-blue-400">18.57</td>
//             <td className="bg-blue-400">0.224</td>
//             <td className="bg-blue-400">181.80</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">4.0</td>
//             <td className="bg-blue-400">8.55</td>
//             <td className="bg-blue-400">6.71</td>
//             <td className="bg-blue-400">43.55</td>
//             <td className="bg-blue-400">43.55</td>
//             <td className="bg-blue-400">2.26</td>
//             <td className="bg-blue-400">2.26</td>
//             <td className="bg-blue-400">14.52</td>
//             <td className="bg-blue-400">14.52</td>
//             <td className="bg-blue-400">72.64</td>
//             <td className="bg-blue-400">21.97</td>
//             <td className="bg-blue-400">0.219</td>
//             <td className="bg-blue-400">149.02</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">60</td>
//             <td className="bg-blue-400">4.8</td>
//             <td className="bg-blue-400">10.01</td>
//             <td className="bg-blue-400">7.85</td>
//             <td className="bg-blue-400">49.22</td>
//             <td className="bg-blue-400">49.22</td>
//             <td className="bg-blue-400">2.22</td>
//             <td className="bg-blue-400">2.22</td>
//             <td className="bg-blue-400">16.41</td>
//             <td className="bg-blue-400">16.41</td>
//             <td className="bg-blue-400">83.81</td>
//             <td className="bg-blue-400">24.94</td>
//             <td className="bg-blue-400">0.215</td>
//             <td className="bg-blue-400">127.31</td>
//         </tr>
//         <tr>
//             <td rowSpan="5" className="bg-[#A9CCFA]"> 72x72 </td>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">3.2</td>
//             <td className="bg-[#A9CCFA]">8.54</td>
//             <td className="bg-[#A9CCFA]">6.71</td>
//             <td className="bg-[#A9CCFA]">66.32</td>
//             <td className="bg-[#A9CCFA]">66.32</td>
//             <td className="bg-[#A9CCFA]">2.79</td>
//             <td className="bg-[#A9CCFA]">2.79</td>
//             <td className="bg-[#A9CCFA]">18.42</td>
//             <td className="bg-[#A9CCFA]">18.42</td>
//             <td className="bg-[#A9CCFA]">106.82</td>
//             <td className="bg-[#A9CCFA]">27.74</td>
//             <td className="bg-[#A9CCFA]">0.272</td>
//             <td className="bg-[#A9CCFA]">149.11</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">4.0</td>
//             <td className="bg-[#A9CCFA]">10.47</td>
//             <td className="bg-[#A9CCFA]">8.22</td>
//             <td className="bg-[#A9CCFA]">79.03</td>
//             <td className="bg-[#A9CCFA]">79.03</td>
//             <td className="bg-[#A9CCFA]">2.75</td>
//             <td className="bg-[#A9CCFA]">2.75</td>
//             <td className="bg-[#A9CCFA]">21.95</td>
//             <td className="bg-[#A9CCFA]">21.95</td>
//             <td className="bg-[#A9CCFA]">129.54</td>
//             <td className="bg-[#A9CCFA]">33.13</td>
//             <td className="bg-[#A9CCFA]">0.267</td>
//             <td className="bg-[#A9CCFA]">121.69</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">4.8</td>
//             <td className="bg-[#A9CCFA]">12.31</td>
//             <td className="bg-[#A9CCFA]">9.66</td>
//             <td className="bg-[#A9CCFA]">90.31</td>
//             <td className="bg-[#A9CCFA]">90.31</td>
//             <td className="bg-[#A9CCFA]">2.71</td>
//             <td className="bg-[#A9CCFA]">2.71</td>
//             <td className="bg-[#A9CCFA]">25.09</td>
//             <td className="bg-[#A9CCFA]">25.09</td>
//             <td className="bg-[#A9CCFA]">150.63</td>
//             <td className="bg-[#A9CCFA]">37.97</td>
//             <td className="bg-[#A9CCFA]">0.263</td>
//             <td className="bg-[#A9CCFA]">103.48</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">6.0</td>
//             <td className="bg-[#A9CCFA]">14.91</td>
//             <td className="bg-[#A9CCFA]">11.71</td>
//             <td className="bg-[#A9CCFA]">104.71</td>
//             <td className="bg-[#A9CCFA]">104.71</td>
//             <td className="bg-[#A9CCFA]">2.65</td>
//             <td className="bg-[#A9CCFA]">2.65</td>
//             <td className="bg-[#A9CCFA]">29.08</td>
//             <td className="bg-[#A9CCFA]">29.08</td>
//             <td className="bg-[#A9CCFA]">179.20</td>
//             <td className="bg-[#A9CCFA]">44.26</td>
//             <td className="bg-[#A9CCFA]">0.257</td>
//             <td className="bg-[#A9CCFA]">85.41</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">72</td>
//             <td className="bg-[#A9CCFA]">8.0</td>
//             <td className="bg-[#A9CCFA]">18.83</td>
//             <td className="bg-[#A9CCFA]">14.78</td>
//             <td className="bg-[#A9CCFA]">122.48</td>
//             <td className="bg-[#A9CCFA]">122.48</td>
//             <td className="bg-[#A9CCFA]">2.55</td>
//             <td className="bg-[#A9CCFA]">2.55</td>
//             <td className="bg-[#A9CCFA]">34.02</td>
//             <td className="bg-[#A9CCFA]">34.02</td>
//             <td className="bg-[#A9CCFA]">218.52</td>
//             <td className="bg-[#A9CCFA]">52.34</td>
//             <td className="bg-[#A9CCFA]">0.247</td>
//             <td className="bg-[#A9CCFA]">67.64</td>
//         </tr>
//         <tr>
//             <td rowSpan            ="6" className="bg-blue-400">80x80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">2.9</td>
//             <td className="bg-blue-400">8.73</td>
//             <td className="bg-blue-400">6.85</td>
//             <td className="bg-blue-400">85.36</td>
//             <td className="bg-blue-400">85.36</td>
//             <td className="bg-blue-400">3.13</td>
//             <td className="bg-blue-400">3.13</td>
//             <td className="bg-blue-400">21.34</td>
//             <td className="bg-blue-400">21.34</td>
//             <td className="bg-blue-400">135.71</td>
//             <td className="bg-blue-400">32.08</td>
//             <td className="bg-blue-400">0.305</td>
//             <td className="bg-blue-400">145.96</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">3.2</td>
//             <td className="bg-blue-400">9.57</td>
//             <td className="bg-blue-400">7.51</td>
//             <td className="bg-blue-400">92.71</td>
//             <td className="bg-blue-400">92.71</td>
//             <td className="bg-blue-400">3.11</td>
//             <td className="bg-blue-400">3.11</td>
//             <td className="bg-blue-400">23.18</td>
//             <td className="bg-blue-400">23.18</td>
//             <td className="bg-blue-400">148.28</td>
//             <td className="bg-blue-400">34.87</td>
//             <td className="bg-blue-400">0.304</td>
//             <td className="bg-blue-400">133.15</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">4.0</td>
//             <td className="bg-blue-400">11.75</td>
//             <td className="bg-blue-400">9.22</td>
//             <td className="bg-blue-400">111.04</td>
//             <td className="bg-blue-400">111.04</td>
//             <td className="bg-blue-400">3.07</td>
//             <td className="bg-blue-400">3.07</td>
//             <td className="bg-blue-400">27.76</td>
//             <td className="bg-blue-400">27.76</td>
//             <td className="bg-blue-400">180.43</td>
//             <td className="bg-blue-400">41.84</td>
//             <td className="bg-blue-400">0.299</td>
//             <td className="bg-blue-400">108.43</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">4.8</td>
//             <td className="bg-blue-400">13.85</td>
//             <td className="bg-blue-400">10.87</td>
//             <td className="bg-blue-400">127.58</td>
//             <td className="bg-blue-400">127.58</td>
//             <td className="bg-blue-400">3.04</td>
//             <td className="bg-blue-400">3.04</td>
//             <td className="bg-blue-400">31.89</td>
//             <td className="bg-blue-400">31.89</td>
//             <td className="bg-blue-400">210.59</td>
//             <td className="bg-blue-400">48.19</td>
//             <td className="bg-blue-400">0.295</td>
//             <td className="bg-blue-400">92.00</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">6.0</td>
//             <td className="bg-blue-400">16.83</td>
//             <td className="bg-blue-400">13.21</td>
//             <td className="bg-blue-400">149.18</td>
//             <td className="bg-blue-400">149.18</td>
//             <td className="bg-blue-400">2.98</td>
//             <td className="bg-blue-400">2.98</td>
//             <td className="bg-blue-400">37.29</td>
//             <td className="bg-blue-400">37.29</td>
//             <td className="bg-blue-400">252.06</td>
//             <td className="bg-blue-400">56.59</td>
//             <td className="bg-blue-400">0.289</td>
//             <td className="bg-blue-400">75.67</td>
//         </tr>
//         <tr>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">80</td>
//             <td className="bg-blue-400">8.0</td>
//             <td className="bg-blue-400">21.39</td>
//             <td className="bg-blue-400">16.79</td>
//             <td className="bg-blue-400">177.19</td>
//             <td className="bg-blue-400">177.19</td>
//             <td className="bg-blue-400">2.88</td>
//             <td className="bg-blue-400">2.88</td>
//             <td className="bg-blue-400">44.30</td>
//             <td className="bg-blue-400">44.30</td>
//             <td className="bg-blue-400">311.00</td>
//             <td className="bg-blue-400">67.84</td>
//             <td className="bg-blue-400">0.279</td>
//             <td className="bg-blue-400">59.54</td>
//         </tr>
//         <tr>
//             <td rowSpan            ="7" className="bg-[#A9CCFA]">91.5x91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">2.6</td>
//             <td className="bg-[#A9CCFA]">9.07</td>
//             <td className="bg-[#A9CCFA]">7.12</td>
//             <td className="bg-[#A9CCFA]">118.32</td>
//             <td className="bg-[#A9CCFA]">118.32</td>
//             <td className="bg-[#A9CCFA]">3.61</td>
//             <td className="bg-[#A9CCFA]">3.61</td>
//             <td className="bg-[#A9CCFA]">25.86</td>
//             <td className="bg-[#A9CCFA]">25.86</td>
//             <td className="bg-[#A9CCFA]">185.77</td>
//             <td className="bg-[#A9CCFA]">38.84</td>
//             <td className="bg-[#A9CCFA]">0.353</td>
//             <td className="bg-[#A9CCFA]">140.42</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">3.2</td>
//             <td className="bg-[#A9CCFA]">11.04</td>
//             <td className="bg-[#A9CCFA]">8.67</td>
//             <td className="bg-[#A9CCFA]">141.69</td>
//             <td className="bg-[#A9CCFA]">141.69</td>
//             <td className="bg-[#A9CCFA]">3.58</td>
//             <td className="bg-[#A9CCFA]">3.58</td>
//             <td className="bg-[#A9CCFA]">30.97</td>
//             <td className="bg-[#A9CCFA]">30.97</td>
//             <td className="bg-[#A9CCFA]">224.80</td>
//             <td className="bg-[#A9CCFA]">46.55</td>
//             <td className="bg-[#A9CCFA]">0.350</td>
//             <td className="bg-[#A9CCFA]">115.40</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">3.6</td>
//             <td className="bg-[#A9CCFA]">12.32</td>
//             <td className="bg-[#A9CCFA]">9.67</td>
//             <td className="bg-[#A9CCFA]">156.49</td>
//             <td className="bg-[#A9CCFA]">156.49</td>
//             <td className="bg-[#A9CCFA]">3.56</td>
//             <td className="bg-[#A9CCFA]">3.56</td>
//             <td className="bg-[#A9CCFA]">34.21</td>
//             <td className="bg-[#A9CCFA]">34.21</td>
//             <td className="bg-[#A9CCFA]">250.02</td>
//             <td className="bg-[#A9CCFA]">51.45</td>
//             <td className="bg-[#A9CCFA]">0.347</td>
//             <td className="bg-[#A9CCFA]">103.36</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">4.5</td>
//             <td className="bg-[#A9CCFA]">15.14</td>
//             <td className="bg-[#A9CCFA]">11.88</td>
//             <td className="bg-[#A9CCFA]">187.57</td>
//             <td className="bg-[#A9CCFA]">187.57</td>
//             <td className="bg-[#A9CCFA]">3.52</td>
//             <td className="bg-[#A9CCFA]">3.52</td>
//             <td className="bg-[#A9CCFA]">41.00</td>
//             <td className="bg-[#A9CCFA]">41.00</td>
//             <td className="bg-[#A9CCFA]">304.39</td>
//             <td className="bg-[#A9CCFA]">61.79</td>
//             <td className="bg-[#A9CCFA]">0.343</td>
//             <td className="bg-[#A9CCFA]">84.16</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">5.4</td>
//             <td className="bg-[#A9CCFA]">17.85</td>
//             <td className="bg-[#A9CCFA]">14.01</td>
//             <td className="bg-[#A9CCFA]">215.68</td>
//             <td className="bg-[#A9CCFA]">215.68</td>
//             <td className="bg-[#A9CCFA]">3.48</td>
//             <td className="bg-[#A9CCFA]">3.48</td>
//             <td className="bg-[#A9CCFA]">47.14</td>
//             <td className="bg-[#A9CCFA]">47.14</td>
//             <td className="bg-[#A9CCFA]">355.46</td>
//             <td className="bg-[#A9CCFA]">71.21</td>
//             <td className="bg-[#A9CCFA]">0.338</td>
//             <td className="bg-[#A9CCFA]">71.38</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">6.0</td>
//             <td className="bg-[#A9CCFA]">19.59</td>
//             <td className="bg-[#A9CCFA]">15.38</td>
//             <td className="bg-[#A9CCFA]">232.81</td>
//             <td className="bg-[#A9CCFA]">232.81</td>
//             <td className="bg-[#A9CCFA]">3.45</td>
//             <td className="bg-[#A9CCFA]">3.45</td>
//             <td className="bg-[#A9CCFA]">50.89</td>
//             <td className="bg-[#A9CCFA]">50.89</td>
//             <td className="bg-[#A9CCFA]">387.66</td>
//             <td className="bg-[#A9CCFA]">77.00</td>
//             <td className="bg-[#A9CCFA]">0.335</td>
//             <td className="bg-[#A9CCFA]">65.01</td>
//         </tr>
//         <tr>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">91.5</td>
//             <td className="bg-[#A9CCFA]">8.0</td>
//             <td className="bg-[#A9CCFA]">25.07</td>
//             <td className="bg-[#A9CCFA]">19.68</td>
//             <td className="bg-[#A9CCFA]">251.18</td>
//             <td className="bg-[#A9CCFA]">251.18</td>
//             <td className="bg-[#A9CCFA]">3.35</td>
//             <td className="bg-[#A9CCFA]">3.35</td>
//             <td className="bg-[#A9CCFA]">61.46</td>
//             <td className="bg-[#A9CCFA]">61.46</td>
//             <td className="bg-[#A9CCFA]">484.25</td>
//             <td className="bg-[#A9CCFA]">93.66</td>
//             <td className="bg-[#A9CCFA]">0.325</td>
//             <td className="bg-[#A9CCFA]">50.80</td>
//         </tr>
//     </table>
// </div>
//     </div>
//   )
// }

// export default Table
