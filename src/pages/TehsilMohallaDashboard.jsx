// import React, { useState, useEffect, useRef } from 'react';
// import { Search, Globe, Database, X, Terminal, ChevronDown, ChevronUp, Download, FileText, Building, Map } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { base_url } from '../../utils/base_url';

// // Language translations
// const translations = {
//         english: {
//                 title: "District, Tehsil, and Village Dashboard",
//                 subtitle: "Select a District, then Tehsil/SRO to automatically process all villages",
//                 selectDistrict: "Select District:",
//                 selectTehsil: "Select Tehsil/SRO:",
//                 villagesOf: "Villages of",
//                 searchPlaceholder: "Search village...",
//                 fetchData: "Fetch Property Data",
//                 code: "Code",
//                 noResultsSearch: "No villages found for your search.",
//                 noResults: "No villages found for this tehsil.",
//                 fetchingData: "Fetching property data...",
//                 fetchSuccess: "Property data fetched successfully!",
//                 fetchError: "Error fetching property data.",
//                 viewSavedRecords: "View Saved Records",
//                 console: "Console",
//                 consoleTitle: "API Request Console",
//                 currentDistrict: "Current District:",
//                 currentTehsil: "Current Tehsil/SRO:",
//                 currentVillage: "Current Village:",
//                 districtCode: "District Code:",
//                 noSelection: "None selected",
//                 autoFetch: "Auto Batch Processing",
//                 hideConsole: "Hide Console",
//                 showConsole: "Show Console",
//                 requestsHistory: "Request History",
//                 clearHistory: "Clear History",
//                 timestamp: "Timestamp",
//                 requestStatus: "Status",
//                 stopProcessing: "Stop Processing",
//                 batchProgress: "Processing Batch:",
//                 success: "Success:",
//                 failed: "Failed:",
//                 exportLogs: "Export Logs",
//                 logsExported: "Logs exported successfully!",
//                 downloadLogs: "Download Log File",
//                 processingLog: "Processing Log",
//                 viewLogs: "View Logs",
//                 logsSection: "API Logs",
//                 loadingDistricts: "Loading districts...",
//                 loadingTehsils: "Loading tehsils for selected district...",
//                 fetchDistrictError: "Error fetching districts.",
//                 fetchTehsilError: "Error fetching tehsils.",
//                 noDistricts: "No districts found.",
//                 noTehsils: "No tehsils found for this district.",
//                 loadingVillages: "Loading villages..."
//         },
//         hindi: {
//                 title: "जिला, तहसील और गांव डैशबोर्ड",
//                 subtitle: "सभी गांवों को स्वचालित रूप से प्रोसेस करने के लिए जिला, फिर तहसील/एसआरओ का चयन करें",
//                 selectDistrict: "जिला चुनें:",
//                 selectTehsil: "तहसील/एसआरओ चुनें:",
//                 villagesOf: "के गांव",
//                 searchPlaceholder: "गांव खोजें...",
//                 fetchData: "सम्पत्ति डेटा प्राप्त करें",
//                 code: "कोड",
//                 noResultsSearch: "खोज के अनुसार कोई गांव नहीं मिला।",
//                 noResults: "इस तहसील के लिए कोई गांव नहीं मिला।",
//                 fetchingData: "सम्पत्ति डेटा प्राप्त किया जा रहा है...",
//                 fetchSuccess: "सम्पत्ति डेटा सफलतापूर्वक प्राप्त किया गया!",
//                 fetchError: "सम्पत्ति डेटा प्राप्त करने में त्रुटि।",
//                 viewSavedRecords: "सहेजे गए रिकॉर्ड देखें",
//                 console: "कंसोल",
//                 consoleTitle: "एपीआई अनुरोध कंसोल",
//                 currentDistrict: "वर्तमान जिला:",
//                 currentTehsil: "वर्तमान तहसील/एसआरओ:",
//                 currentVillage: "वर्तमान गांव:",
//                 districtCode: "जिला कोड:",
//                 noSelection: "कोई चयन नहीं",
//                 autoFetch: "स्वचालित बैच प्रोसेसिंग",
//                 hideConsole: "कंसोल छिपाएं",
//                 showConsole: "कंसोल दिखाएं",
//                 requestsHistory: "अनुरोध इतिहास",
//                 clearHistory: "इतिहास साफ़ करें",
//                 timestamp: "समय",
//                 requestStatus: "स्थिति",
//                 stopProcessing: "प्रोसेसिंग रोकें",
//                 batchProgress: "बैच प्रोसेसिंग:",
//                 success: "सफल:",
//                 failed: "असफल:",
//                 exportLogs: "लॉग निर्यात करें",
//                 logsExported: "लॉग सफलतापूर्वक निर्यात किए गए!",
//                 downloadLogs: "लॉग फ़ाइल डाउनलोड करें",
//                 processingLog: "प्रोसेसिंग लॉग",
//                 viewLogs: "लॉग देखें",
//                 logsSection: "एपीआई लॉग",
//                 loadingDistricts: "जिले लोड हो रहे हैं...",
//                 loadingTehsils: "चयनित जिले के लिए तहसीलें लोड हो रही हैं...",
//                 fetchDistrictError: "जिले प्राप्त करने में त्रुटि।",
//                 fetchTehsilError: "तहसीलें प्राप्त करने में त्रुटि।",
//                 noDistricts: "कोई जिला नहीं मिला।",
//                 noTehsils: "इस जिले के लिए कोई तहसील नहीं मिली।",
//                 loadingVillages: "गांव लोड हो रहे हैं..."
//         }
// };

// const DistrictVillageDashboardNew = () => {
//         const navigate = useNavigate();
//         // State for district, tehsil, and village data
//         const [districts, setDistricts] = useState([]);
//         const [tehsils, setTehsils] = useState([]); // SROs for selected district
//         const [villages, setVillages] = useState([]);

//         const [selectedDistrict, setSelectedDistrict] = useState(null);
//         const [selectedTehsil, setSelectedTehsil] = useState(null);
//         const [selectedVillage, setSelectedVillage] = useState(null);

//         const [searchTerm, setSearchTerm] = useState('');
//         const [filteredVillages, setFilteredVillages] = useState([]);

//         const [language, setLanguage] = useState('english'); // Default to English
//         const [fetchStatus, setFetchStatus] = useState(null); // null, 'loading', 'success', 'error'
//         const [showConsole, setShowConsole] = useState(true);
//         const [requestHistory, setRequestHistory] = useState([]);
//         const [showHistory, setShowHistory] = useState(true);
//         const [isProcessingBatch, setIsProcessingBatch] = useState(false);
//         const [processingStats, setProcessingStats] = useState({
//                 total: 0,
//                 completed: 0,
//                 success: 0,
//                 failed: 0
//         });
//         const [batchProgress, setBatchProgress] = useState({
//                 currentBatch: 0,
//                 totalBatches: 0,
//                 batchSize: 0,
//                 currentBatchProgress: 0
//         });

//         // Add this to your JSX where you show batch processing info
//         const BatchProgressUI = () => {
//                 return (
//                         <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500 max-w-md z-50">
//                                 <div className="font-medium text-gray-800 flex justify-between">
//                                         <span>{text.batchProgress}</span>
//                                         <span className="font-bold">{processingStats.completed}/{processingStats.total}</span>
//                                 </div>

//                                 {batchProgress.totalBatches > 0 && (
//                                         <div className="text-xs text-gray-600 flex justify-between mt-1">
//                                                 <span>Batch {batchProgress.currentBatch}/{batchProgress.totalBatches}</span>
//                                                 <span>({batchProgress.currentBatchProgress}/{batchProgress.batchSize} in current batch)</span>
//                                         </div>
//                                 )}

//                                 <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
//                                         <div
//                                                 className="bg-blue-600 h-2.5 rounded-full transition-all"
//                                                 style={{ width: `${(processingStats.completed / processingStats.total) * 100}%` }}
//                                         ></div>
//                                 </div>

//                                 <div className="flex justify-between text-sm">
//                                         <span className="text-green-600">{text.success} {processingStats.success}</span>
//                                         <span className="text-red-600">{text.failed} {processingStats.failed}</span>
//                                 </div>

//                                 <button
//                                         onClick={stopAllProcessing}
//                                         className="mt-2 w-full bg-red-600 text-white text-xs px-2 py-1 rounded"
//                                 >
//                                         {text.stopProcessing}
//                                 </button>
//                         </div>
//                 );
//         };




//         // Loading states
//         const [loadingDistricts, setLoadingDistricts] = useState(false);
//         const [loadingTehsils, setLoadingTehsils] = useState(false);
//         const [loadingVillages, setLoadingVillages] = useState(false);
//         const [districtError, setDistrictError] = useState(null);
//         const [tehsilError, setTehsilError] = useState(null);
//         const [villageError, setVillageError] = useState(null);

//         // Enhanced functionality states
//         const [logEntries, setLogEntries] = useState([]);
//         const [showLogs, setShowLogs] = useState(true);
//         const [exportStatus, setExportStatus] = useState(null);
//         const [maxConcurrentRequests, setMaxConcurrentRequests] = useState(100);

//         const [isProcessingAllTehsils, setIsProcessingAllTehsils] = useState(true);


//         // Ref to store log entries for export
//         const logEntriesRef = useRef([]);

//         // Toggle language function
//         const toggleLanguage = () => {
//                 setLanguage(language === 'english' ? 'hindi' : 'english');
//         };

//         // Get current language text
//         const text = translations[language];

//         // Update the log entries ref whenever the state changes
//         useEffect(() => {
//                 logEntriesRef.current = logEntries;
//         }, [logEntries]);

//         // Fetch all districts on component mount
//         useEffect(() => {
//                 fetchDistricts();
//         }, []);

//         // Function to add a log entry
//         const addLogEntry = (entry) => {
//                 const timestamp = new Date().toISOString();
//                 const logEntry = {
//                         timestamp,
//                         ...entry
//                 };

//                 setLogEntries(prevLogs => [...prevLogs, logEntry]);

//                 // Also add to request history for console display
//                 if (entry.type === 'api') {
//                         const historyItem = {
//                                 timestamp: new Date().toLocaleTimeString(),
//                                 district: entry.district,
//                                 tehsil: entry.tehsil,
//                                 village: entry.village,
//                                 status: entry.status,
//                                 message: entry.message
//                         };
//                         setRequestHistory(prev => [historyItem, ...prev]);
//                 }
//         };

//         // Fetch districts from API
//         const fetchDistricts = async () => {
//                 setLoadingDistricts(true);
//                 setDistrictError(null);

//                 try {
//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'fetch_districts',
//                                 message: 'Fetching all districts'
//                         });

//                         const response = await fetch(`${base_url}/district/api/districts`);

//                         if (!response.ok) {
//                                 throw new Error(`HTTP error! Status: ${response.status}`);
//                         }

//                         const data = await response.json();

//                         if (Array.isArray(data)) {
//                                 // Format the districts for our component
//                                 const formattedDistricts = data.map(district => ({
//                                         code: district.districtCode,
//                                         name: district.districtName || `District ${district.districtCode}`,
//                                         nameEn: district.districtName || `District ${district.districtCode}`
//                                 }));

//                                 setDistricts(formattedDistricts);

//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'fetch_districts_success',
//                                         message: `Successfully fetched ${formattedDistricts.length} districts`
//                                 });
//                         } else {
//                                 setDistricts([]);
//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'fetch_districts_error',
//                                         message: 'Invalid district data format received'
//                                 });
//                         }
//                 } catch (error) {
//                         console.error('Error fetching districts:', error);
//                         setDistrictError(error.message);

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'fetch_districts_error',
//                                 message: `Error fetching districts: ${error.message}`
//                         });
//                 } finally {
//                         setLoadingDistricts(false);
//                 }
//         };


//         // const startAllTehsilsProcessing = async () => {
//         //         console.log("hi", 'startAllTehPro called')
//         //         if (isProcessingAllTehsils || isProcessingBatch) return;

//         //         // Set processing state
//         //         setIsProcessingAllTehsils(true);

//         //         // Log the start of all-tehsil processing
//         //         addLogEntry({
//         //                 type: 'system',
//         //                 action: 'start_all_tehsils',
//         //                 message: `Starting automatic processing of all Tehsils with request queuing`
//         //         });

//         //         // Set initial statistics
//         //         setAllTehsilsStats({
//         //                 totalTehsils: tehsils.length,
//         //                 completedTehsils: 0,
//         //                 currentTehsilIndex: 0
//         //         });

//         //         // Ensure the console is visible
//         //         setShowConsole(true);
//         //         setShowHistory(true);

//         //         console.log(`Starting processing of all tehsils: ${tehsils.length} tehsils found`);

//         //         // Process each tehsil one by one
//         //         for (let i = 0; i < tehsils.length; i++) {
//         //                 console.log("Count - i", i)
//         //                 if (!isProcessingAllTehsils) {
//         //                         console.log("Processing stopped by user");
//         //                         break; // Allow cancellation
//         //                 }

//         //                 const tehsil = tehsils[i];
//         //                 console.log(`Processing tehsil ${i + 1}/${tehsils.length}: ${tehsil.code} - ${tehsil.nameEn}`);

//         //                 // Update current tehsil index
//         //                 setAllTehsilsStats(prev => ({
//         //                         ...prev,
//         //                         currentTehsilIndex: i
//         //                 }));

//         //                 addLogEntry({
//         //                         type: 'system',
//         //                         action: 'process_tehsil',
//         //                         tehsil: tehsil,
//         //                         message: `Processing Tehsil ${i + 1}/${tehsils.length}: ${getDisplayName(tehsil)} (${tehsil.code})`
//         //                 });

//         //                 // Get villages for this tehsil
//         //                 const villages = getVillagesByTehsil(tehsil.code);
//         //                 console.log(`Found ${villages.length} villages for tehsil ${tehsil.code}`);

//         //                 // Set current tehsil in UI and state
//         //                 setSelectedTehsil(tehsil);
//         //                 setFilteredVillages(villages);

//         //                 // Set up for this tehsil's villages
//         //                 if (villages.length > 0) {
//         //                         // Update total stats for this batch
//         //                         setProcessingStats({
//         //                                 total: villages.length,
//         //                                 completed: 0,
//         //                                 success: 0,
//         //                                 failed: 0
//         //                         });

//         //                         // Use a queue system to process multiple requests concurrently
//         //                         await processVillagesWithQueue(villages, tehsil);

//         //                         // Add completion log for this tehsil's villages
//         //                         addLogEntry({
//         //                                 type: 'system',
//         //                                 action: 'tehsil_villages_complete',
//         //                                 tehsil: tehsil,
//         //                                 message: `Completed processing all villages for Tehsil: ${getDisplayName(tehsil)} (${tehsil.code})`
//         //                         });
//         //                 } else {
//         //                         addLogEntry({
//         //                                 type: 'system',
//         //                                 action: 'no_villages',
//         //                                 tehsil: tehsil,
//         //                                 message: `No villages found for Tehsil: ${getDisplayName(tehsil)} (${tehsil.code})`
//         //                         });
//         //                 }

//         //                 // Update completion statistics
//         //                 setAllTehsilsStats(prev => ({
//         //                         ...prev,
//         //                         completedTehsils: prev.completedTehsils + 1
//         //                 }));

//         //                 // Small delay between tehsils
//         //                 // await new Promise(resolve => setTimeout(resolve, 1000));
//         //         }

//         //         addLogEntry({
//         //                 type: 'system',
//         //                 action: 'complete_all_tehsils',
//         //                 message: `Completed processing all Tehsils (${tehsils.length})`
//         //         });

//         //         // Reset processing state
//         //         setIsProcessingAllTehsils(false);
//         // };

//         // Fetch SROs/Tehsils for a selected district

//         const startAllTehsilsProcessing = async () => {
//                 if (isProcessingAllTehsils || isProcessingBatch || !selectedDistrict) return;

//                 // Set processing state
//                 setIsProcessingAllTehsils(true);

//                 // Log the start of all-tehsil processing
//                 addLogEntry({
//                         type: 'system',
//                         action: 'start_all_tehsils',
//                         message: `Starting automatic processing of all Tehsils with batch processing`
//                 });

//                 // Ensure the console is visible
//                 setShowConsole(true);
//                 setShowHistory(true);

//                 console.log(`Starting processing of all tehsils: ${tehsils.length} tehsils found`);

//                 // Process each tehsil one by one
//                 for (let i = 0; i < tehsils.length; i++) {
//                         setBatchProgress({
//                                 currentBatch: batchIndex + 1,
//                                 totalBatches,
//                                 batchSize: currentBatch.length,
//                                 currentBatchProgress: 0
//                         });

//                         if (!isProcessingAllTehsils) {
//                                 console.log("Processing stopped by user");
//                                 break; // Allow cancellation
//                         }

//                         const tehsil = tehsils[i];
//                         console.log(`Processing tehsil ${i + 1}/${tehsils.length}: ${tehsil.sroCode} - ${tehsil.sroName}`);

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'process_tehsil',
//                                 tehsil: tehsil,
//                                 message: `Processing Tehsil ${i + 1}/${tehsils.length}: ${tehsil.sroName} (${tehsil.sroCode})`
//                         });

//                         // Set current tehsil in UI and state
//                         setSelectedTehsil(tehsil);

//                         try {
//                                 // Fetch villages for this tehsil
//                                 setLoadingVillages(true);
//                                 const response = await fetch(`${base_url}/village/api/villages?districtCode=${selectedDistrict.code}&sroCode=${tehsil.sroCode}&limit=1000`);

//                                 if (!response.ok) {
//                                         throw new Error(`HTTP error! Status: ${response.status}`);
//                                 }

//                                 const data = await response.json();

//                                 if (data.success && Array.isArray(data.villages)) {
//                                         // Format the villages
//                                         const formattedVillages = data.villages.map(village => ({
//                                                 value: village.villageCode,
//                                                 name: village.villageName,
//                                                 nameEn: village.villageName
//                                         }));

//                                         setVillages(formattedVillages);
//                                         setFilteredVillages(formattedVillages);

//                                         console.log(`Found ${formattedVillages.length} villages for tehsil ${tehsil.sroCode}`);

//                                         // Process villages in batches if we have any
//                                         if (formattedVillages.length > 0) {
//                                                 // Use the improved queue system to process multiple requests concurrently
//                                                 await processVillagesWithQueue(formattedVillages, tehsil);

//                                                 addLogEntry({
//                                                         type: 'system',
//                                                         action: 'tehsil_villages_complete',
//                                                         tehsil: tehsil,
//                                                         message: `Completed processing all villages for Tehsil: ${tehsil.sroName} (${tehsil.sroCode})`
//                                                 });
//                                         } else {
//                                                 addLogEntry({
//                                                         type: 'system',
//                                                         action: 'no_villages',
//                                                         tehsil: tehsil,
//                                                         message: `No villages found for Tehsil: ${tehsil.sroName} (${tehsil.sroCode})`
//                                                 });
//                                         }
//                                 } else {
//                                         addLogEntry({
//                                                 type: 'system',
//                                                 action: 'villages_error',
//                                                 tehsil: tehsil,
//                                                 message: `Invalid village data format for Tehsil: ${tehsil.sroName} (${tehsil.sroCode})`
//                                         });
//                                 }
//                         } catch (error) {
//                                 console.error('Error fetching villages:', error);
//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'tehsil_error',
//                                         tehsil: tehsil,
//                                         message: `Error processing Tehsil ${tehsil.sroName} (${tehsil.sroCode}): ${error.message}`
//                                 });
//                         } finally {
//                                 setLoadingVillages(false);
//                         }

//                         // Small delay between tehsils
//                         await new Promise(resolve => setTimeout(resolve, 1000));
//                 }

//                 addLogEntry({
//                         type: 'system',
//                         action: 'complete_all_tehsils',
//                         message: `Completed processing all Tehsils (${tehsils.length})`
//                 });

//                 // Reset processing state
//                 setIsProcessingAllTehsils(false);
//         };

//         const fetchTehsils = async (districtCode) => {
//                 setLoadingTehsils(true);
//                 setTehsilError(null);
//                 setTehsils([]);

//                 try {
//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'fetch_tehsils',
//                                 district: selectedDistrict,
//                                 message: `Fetching tehsils for district ${districtCode}`
//                         });

//                         const response = await fetch(`${base_url}/district/api/sros/${districtCode}`);

//                         if (!response.ok) {
//                                 throw new Error(`HTTP error! Status: ${response.status}`);
//                         }

//                         const data = await response.json();
//                         console.log("data", data)

//                         if (data) {
//                                 // Format the tehsils for our component
//                                 const formattedTehsils = data.map(sro => ({
//                                         code: sro.sroCode,
//                                         name: sro.sroName,
//                                         nameEn: sro.sroName
//                                 }));

//                                 setTehsils(data);

//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'fetch_tehsils_success',
//                                         district: selectedDistrict,
//                                         message: `Successfully fetched ${formattedTehsils.length} tehsils for district ${districtCode}`
//                                 });
//                         } else {
//                                 setTehsils([]);
//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'fetch_tehsils_error',
//                                         district: selectedDistrict,
//                                         message: 'Invalid tehsil data format received'
//                                 });
//                         }
//                 } catch (error) {
//                         console.error('Error fetching tehsils:', error);
//                         setTehsilError(error.message);

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'fetch_tehsils_error',
//                                 district: selectedDistrict,
//                                 message: `Error fetching tehsils: ${error.message}`
//                         });
//                 } finally {
//                         setLoadingTehsils(false);
//                 }
//         };
//         console.log(tehsils)

//         // Fetch villages for a selected district and tehsil
//         const fetchVillages = async (districtCode, sroCode, tehsil) => {
//                 console.log("fetchVillages", districtCode, sroCode)
//                 setLoadingVillages(true);
//                 setVillageError(null);
//                 setVillages([]);

//                 try {
//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'fetch_villages',
//                                 district: selectedDistrict,
//                                 tehsil: selectedTehsil,
//                                 message: `Fetching villages for district ${districtCode} and SRO ${sroCode}`
//                         });

//                         // First try to get villages from our database
//                         const response = await fetch(`${base_url}/village/api/villages?districtCode=${districtCode}&sroCode=${sroCode}&limit=1000`);

//                         if (!response.ok) {
//                                 throw new Error(`HTTP error! Status: ${response.status}`);
//                         }

//                         const data = await response.json();

//                         if (data.success && Array.isArray(data.villages)) {
//                                 if (data.villages.length > 0) {
//                                         // We have villages in the database
//                                         const formattedVillages = data.villages.map(village => ({
//                                                 value: village.villageCode,
//                                                 name: village.villageName,
//                                                 nameEn: village.villageName
//                                         }));

//                                         setVillages(formattedVillages);
//                                         setFilteredVillages(formattedVillages);
//                                         startAutoProcessing(tehsil, formattedVillages);

//                                         addLogEntry({
//                                                 type: 'system',
//                                                 action: 'fetch_villages_success',
//                                                 district: selectedDistrict,
//                                                 tehsil: selectedTehsil,
//                                                 message: `Successfully fetched ${formattedVillages.length} villages from database`
//                                         });
//                                 } else {
//                                         // No villages in database, try to scrape them
//                                         addLogEntry({
//                                                 type: 'system',
//                                                 action: 'scrape_villages',
//                                                 district: selectedDistrict,
//                                                 tehsil: selectedTehsil,
//                                                 message: `No villages in database, scraping from source for district ${districtCode} and SRO ${sroCode}`
//                                         });

//                                         const scrapeResponse = await fetch(`${base_url}/village/api/scrape-villages?districtCode=${districtCode}&sroCode=${sroCode}`);

//                                         if (!scrapeResponse.ok) {
//                                                 throw new Error(`HTTP error during scraping! Status: ${scrapeResponse.status}`);
//                                         }

//                                         const scrapeData = await scrapeResponse.json();

//                                         if (scrapeData.success && Array.isArray(scrapeData.villages)) {
//                                                 // Format the scraped villages
//                                                 const formattedVillages = scrapeData.villages.map(village => ({
//                                                         value: village.villageCode,
//                                                         name: village.villageName,
//                                                         nameEn: village.villageName
//                                                 }));

//                                                 // Fetch all villages again after scraping
//                                                 const refreshResponse = await fetch(`${base_url}/api/villages?districtCode=${districtCode}&sroCode=${sroCode}&limit=1000`);
//                                                 const refreshData = await refreshResponse.json();

//                                                 if (refreshData.success && Array.isArray(refreshData.villages)) {
//                                                         const refreshedVillages = refreshData.villages.map(village => ({
//                                                                 value: village.villageCode,
//                                                                 name: village.villageName,
//                                                                 nameEn: village.villageName
//                                                         }));

//                                                         setVillages(refreshedVillages);
//                                                         setFilteredVillages(refreshedVillages);
//                                                 } else {
//                                                         // Fall back to the scraped sample
//                                                         setVillages(formattedVillages);
//                                                         setFilteredVillages(formattedVillages);
//                                                 }

//                                                 addLogEntry({
//                                                         type: 'system',
//                                                         action: 'scrape_villages_success',
//                                                         district: selectedDistrict,
//                                                         tehsil: selectedTehsil,
//                                                         message: `Successfully scraped villages for district ${districtCode} and SRO ${sroCode}`
//                                                 });
//                                         } else {
//                                                 setVillages([]);
//                                                 setFilteredVillages([]);
//                                                 addLogEntry({
//                                                         type: 'system',
//                                                         action: 'scrape_villages_error',
//                                                         district: selectedDistrict,
//                                                         tehsil: selectedTehsil,
//                                                         message: 'Failed to scrape villages or invalid data format received'
//                                                 });
//                                         }
//                                 }
//                         } else {
//                                 setVillages([]);
//                                 setFilteredVillages([]);
//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'fetch_villages_error',
//                                         district: selectedDistrict,
//                                         tehsil: selectedTehsil,
//                                         message: 'Invalid village data format received'
//                                 });
//                         }
//                 } catch (error) {
//                         console.error('Error fetching/scraping villages:', error);
//                         setVillageError(error.message);

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'fetch_villages_error',
//                                 district: selectedDistrict,
//                                 tehsil: selectedTehsil,
//                                 message: `Error fetching/scraping villages: ${error.message}`
//                         });
//                 } finally {
//                         setLoadingVillages(false);
//                 }
//         };

//         console.log("v", villages)

//         // Handle district selection
//         const handleDistrictSelect = (district) => {
//                 setSelectedDistrict(district);
//                 setSelectedTehsil(null);
//                 setSelectedVillage(null);
//                 setFilteredVillages([]);
//                 setVillages([]);
//                 setSearchTerm('');

//                 addLogEntry({
//                         type: 'user',
//                         action: 'select_district',
//                         district: district,
//                         message: `User selected District: ${getDisplayName(district)} (${district.code})`
//                 });

//                 // Fetch tehsils for this district
//                 fetchTehsils(district.code);
//         };

//         console.log("villages", villages)

//         // Handle tehsil selection
//         const handleTehsilSelect = (tehsil) => {
//                 console.log("thesil", tehsil)
//                 setSelectedTehsil(tehsil);
//                 setSelectedVillage(null);
//                 setSearchTerm('');

//                 addLogEntry({
//                         type: 'user',
//                         action: 'select_tehsil',
//                         district: selectedDistrict,
//                         tehsil: tehsil,
//                         message: `User selected Tehsil: ${getDisplayName(tehsil)} (${tehsil.code})` // Use 'code' consistently
//                 });

//                 // Fetch villages for this tehsil using the 'code' property
//                 fetchVillages(selectedDistrict.code, tehsil.sroCode, tehsil);
//                 // Auto process all villages - immediately make API requests

//         };

//         // Handle village selection
//         const handleVillageSelect = (village) => {
//                 setSelectedVillage(village);

//                 addLogEntry({
//                         type: 'user',
//                         action: 'select_village',
//                         district: selectedDistrict,
//                         tehsil: selectedTehsil,
//                         village: village,
//                         message: `User selected Village: ${getDisplayName(village)} (${village.value})`
//                 });

//                 // Auto-fetch property data when a village is selected
//                 fetchPropertyData(village);
//         };

//         // Handle search input change
//         const handleSearchChange = (e) => {
//                 const term = e.target.value;
//                 setSearchTerm(term);

//                 if (villages.length > 0) {
//                         const filtered = term
//                                 ? villages.filter(village =>
//                                         language === 'english'
//                                                 ? village.nameEn.toLowerCase().includes(term.toLowerCase())
//                                                 : village.name.toLowerCase().includes(term.toLowerCase()))
//                                 : villages;

//                         setFilteredVillages(filtered);
//                 }
//         };

//         // Function to fetch property data
//         // const fetchPropertyData = async (village = selectedVillage, tehsil = selectedTehsil, district = selectedDistrict, isBatchProcessing = false) => {
//         //         console.log("selectedDistrict", district)
//         //         if (!district || !tehsil || !village) {
//         //                 return false;
//         //         }

//         //         if (!isBatchProcessing) {
//         //                 setFetchStatus('loading');
//         //         }

//         //         // Create timestamp for request
//         //         const timestamp = new Date().toLocaleTimeString();

//         //         try {
//         //                 // API call to fetch property data
//         //                 const requestBody = {
//         //                         districtCode: selectedDistrict.code,
//         //                         sroCode: tehsil.sroCode,
//         //                         gaonCode1: village.value,
//         //                         propertyId: '',
//         //                         propNEWAddress: '1'
//         //                 };

//         //                 // Add to request history
//         //                 const historyItem = {
//         //                         timestamp,
//         //                         district: district,
//         //                         tehsil: tehsil,
//         //                         village: village,
//         //                         status: 'pending',
//         //                         message: `Fetching data for ${getDisplayName(village)} (${village.value})`
//         //                 };

//         //                 setRequestHistory(prev => [historyItem, ...prev]);

//         //                 // Add API call to log
//         //                 addLogEntry({
//         //                         type: 'api',
//         //                         action: 'api_request',
//         //                         district: district,
//         //                         tehsil: tehsil,
//         //                         village: village,
//         //                         status: 'pending',
//         //                         message: `API Request: districtCode=${district.code}, sroCode=${tehsil.sroCode}, gaonCode1=${village.value}`,
//         //                         requestBody
//         //                 });

//         //                 // Make the actual API call to fetch property data
//         //                 console.log(`Making API request for District: ${district.code}, SRO: ${tehsil.sroCode}, GaonCode: ${village.value}`);

//         //                 const response = await fetch(`${base_url}/api/property-data`, {
//         //                         method: 'POST',
//         //                         headers: {
//         //                                 'Content-Type': 'application/json'
//         //                         },
//         //                         body: JSON.stringify(requestBody)
//         //                 });

//         //                 if (!response.ok) {
//         //                         throw new Error(`Failed to fetch property data: ${response.status} ${response.statusText}`);
//         //                 }

//         //                 const responseData = await response.json();

//         //                 // Update history item status to success
//         //                 setRequestHistory(prev =>
//         //                         prev.map(item =>
//         //                                 item.timestamp === timestamp
//         //                                         ? {
//         //                                                 ...item,
//         //                                                 status: 'success',
//         //                                                 message: `Successfully fetched data for ${getDisplayName(village)} (${village.value})`
//         //                                         }
//         //                                         : item
//         //                         )
//         //                 );

//         //                 // Add API response to log
//         //                 addLogEntry({
//         //                         type: 'api',
//         //                         action: 'api_response',
//         //                         district: district,
//         //                         tehsil: tehsil,
//         //                         village: village,
//         //                         status: 'success',
//         //                         message: `API Response: Success for ${getDisplayName(village)} (${village.value})`,
//         //                         responseStatus: response.status,
//         //                         responseData: responseData
//         //                 });

//         //                 if (!isBatchProcessing) {
//         //                         setFetchStatus('success');
//         //                         // Show success message for 2 seconds then reset
//         //                         setTimeout(() => {
//         //                                 setFetchStatus(null);
//         //                         }, 2000);
//         //                 }

//         //                 return true;
//         //         } catch (error) {
//         //                 console.error('Error fetching property data:', error);

//         //                 // Update history item status to error
//         //                 setRequestHistory(prev =>
//         //                         prev.map(item =>
//         //                                 item.timestamp === timestamp
//         //                                         ? {
//         //                                                 ...item,
//         //                                                 status: 'error',
//         //                                                 message: `Error fetching data for ${getDisplayName(village)} (${village.value}): ${error.message}`
//         //                                         }
//         //                                         : item
//         //                         )
//         //                 );

//         //                 // Add API error to log
//         //                 addLogEntry({
//         //                         type: 'api',
//         //                         action: 'api_error',
//         //                         district: district,
//         //                         tehsil: tehsil,
//         //                         village: village,
//         //                         status: 'error',
//         //                         message: `API Error: ${error.message} for ${getDisplayName(village)} (${village.value})`,
//         //                         error: error.message
//         //                 });

//         //                 if (!isBatchProcessing) {
//         //                         setFetchStatus('error');
//         //                         // Show error message for 2 seconds then reset
//         //                         setTimeout(() => {
//         //                                 setFetchStatus(null);
//         //                         }, 2000);
//         //                 }

//         //                 return false;
//         //         }
//         // };

//         const fetchPropertyData = async (village = selectedVillage, tehsil = selectedTehsil, district = selectedDistrict, isBatchProcessing = false) => {
//                 if (!district || !tehsil || !village) {
//                         return false;
//                 }

//                 if (!isBatchProcessing) {
//                         setFetchStatus('loading');
//                 }

//                 // Create timestamp for request
//                 const timestamp = new Date().toLocaleTimeString();
//                 const requestId = `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

//                 try {
//                         // API call to fetch property data
//                         const requestBody = {
//                                 districtCode: selectedDistrict?.code,
//                                 sroCode: tehsil.sroCode,
//                                 gaonCode1: village.value,
//                                 propertyId: '',
//                                 propNEWAddress: '1'
//                         };

//                         // console.log("requestBody", district , requestBody)

//                         // Add to request history
//                         const historyItem = {
//                                 timestamp,
//                                 requestId,
//                                 district: selectedDistrict?.code,
//                                 tehsil: tehsil,
//                                 village: village,
//                                 status: 'pending',
//                                 message: `Fetching data for ${getDisplayName(village)} (${village.value})`
//                         };

//                         setRequestHistory(prev => [historyItem, ...prev]);

//                         // Add API call to log
//                         addLogEntry({
//                                 type: 'api',
//                                 action: 'api_request',
//                                 requestId,
//                                 district: district,
//                                 tehsil: tehsil,
//                                 village: village,
//                                 status: 'pending',
//                                 message: `API Request: districtCode=${selectedDistrict?.code}, sroCode=${tehsil.sroCode}, gaonCode1=${village.value}`,
//                                 requestBody
//                         });

//                         // Make the actual API call to fetch property data
//                         const response = await fetch(`${base_url}/api/property-data`, {
//                                 method: 'POST',
//                                 headers: {
//                                         'Content-Type': 'application/json'
//                                 },
//                                 body: JSON.stringify(requestBody)
//                         });

//                         if (!response.ok) {
//                                 throw new Error(`Failed to fetch property data: ${response.status} ${response.statusText}`);
//                         }

//                         const responseData = await response.json();

//                         // Update history item status to success using the requestId for a more reliable match
//                         setRequestHistory(prev =>
//                                 prev.map(item =>
//                                         item.requestId === requestId
//                                                 ? {
//                                                         ...item,
//                                                         status: 'success',
//                                                         message: `Successfully fetched data for ${getDisplayName(village)} (${village.value})`
//                                                 }
//                                                 : item
//                                 )
//                         );

//                         // Add API response to log
//                         addLogEntry({
//                                 type: 'api',
//                                 action: 'api_response',
//                                 requestId,
//                                 district: district,
//                                 tehsil: tehsil,
//                                 village: village,
//                                 status: 'success',
//                                 message: `API Response: Success for ${getDisplayName(village)} (${village.value})`,
//                                 responseStatus: response.status
//                         });

//                         if (!isBatchProcessing) {
//                                 setFetchStatus('success');
//                                 // Show success message for 2 seconds then reset
//                                 setTimeout(() => {
//                                         setFetchStatus(null);
//                                 }, 2000);
//                         }

//                         return true;
//                 } catch (error) {
//                         console.error('Error fetching property data:', error);

//                         // Update history item status to error
//                         setRequestHistory(prev =>
//                                 prev.map(item =>
//                                         item.requestId === requestId
//                                                 ? {
//                                                         ...item,
//                                                         status: 'error',
//                                                         message: `Error fetching data for ${getDisplayName(village)} (${village.value}): ${error.message}`
//                                                 }
//                                                 : item
//                                 )
//                         );

//                         // Add API error to log
//                         addLogEntry({
//                                 type: 'api',
//                                 action: 'api_error',
//                                 requestId,
//                                 district: district,
//                                 tehsil: tehsil,
//                                 village: village,
//                                 status: 'error',
//                                 message: `API Error: ${error.message} for ${getDisplayName(village)} (${village.value})`,
//                                 error: error.message
//                         });

//                         if (!isBatchProcessing) {
//                                 setFetchStatus('error');
//                                 // Show error message for 2 seconds then reset
//                                 setTimeout(() => {
//                                         setFetchStatus(null);
//                                 }, 2000);
//                         }

//                         return false;
//                 }
//         };

//         // Function to automatically process all villages
//         // const startAutoProcessing = async () => {
//         //         if (!selectedDistrict || !selectedTehsil || filteredVillages.length === 0 || isProcessingBatch) {
//         //                 return;
//         //         }

//         //         setIsProcessingBatch(true);

//         //         setProcessingStats({
//         //                 total: filteredVillages.length,
//         //                 completed: 0,
//         //                 success: 0,
//         //                 failed: 0
//         //         });

//         //         // Ensure the console is visible
//         //         setShowConsole(true);
//         //         setShowHistory(true);

//         //         // Add batch processing info to history and logs
//         //         const batchTimestamp = new Date().toLocaleTimeString();
//         //         const batchItem = {
//         //                 timestamp: batchTimestamp,
//         //                 district: selectedDistrict,
//         //                 tehsil: selectedTehsil,
//         //                 village: null,
//         //                 status: 'batch-start',
//         //                 message: `Starting batch processing for ${getDisplayName(selectedTehsil)} (${selectedTehsil.code}) in ${getDisplayName(selectedDistrict)} (${selectedDistrict.code}) - ${filteredVillages.length} villages`
//         //         };
//         //         setRequestHistory(prev => [batchItem, ...prev]);

//         //         addLogEntry({
//         //                 type: 'system',
//         //                 action: 'batch_start',
//         //                 district: selectedDistrict,
//         //                 tehsil: selectedTehsil,
//         //                 message: `Starting batch processing for ${getDisplayName(selectedTehsil)} (${selectedTehsil.code}) in ${getDisplayName(selectedDistrict)} (${selectedDistrict.code}) - ${filteredVillages.length} villages`
//         //         });

//         //         // Process with maximum concurrent requests
//         //         await processVillagesWithQueue(filteredVillages);

//         //         // Add completion info to history
//         //         const completionItem = {
//         //                 timestamp: new Date().toLocaleTimeString(),
//         //                 district: selectedDistrict,
//         //                 tehsil: selectedTehsil,
//         //                 status: 'batch-complete',
//         //                 message: `Completed batch processing for ${getDisplayName(selectedTehsil)} (${selectedTehsil.code}) in ${getDisplayName(selectedDistrict)} (${selectedDistrict.code})`
//         //         };
//         //         setRequestHistory(prev => [completionItem, ...prev]);

//         //         addLogEntry({
//         //                 type: 'system',
//         //                 action: 'batch_complete',
//         //                 district: selectedDistrict,
//         //                 tehsil: selectedTehsil,
//         //                 message: `Completed batch processing for ${getDisplayName(selectedTehsil)} (${selectedTehsil.code}) in ${getDisplayName(selectedDistrict)} (${selectedDistrict.code}). Success: ${processingStats.success}, Failed: ${processingStats.failed}`
//         //         });

//         //         // Reset processing state
//         //         setIsProcessingBatch(false);

//         //         return true;
//         // };
//         const startAutoProcessing = async (tehsil, villages, isPartOfAllTehsils = false) => {
//                 console.log("Check", tehsil)
//                 console.log("villages3", villages)

//                 // if (!villages || villages.length === 0) return;

//                 if (!isPartOfAllTehsils) {
//                         // Only set this if not already processing all tehsils
//                         setIsProcessingBatch(true);
//                 }

//                 setProcessingStats({
//                         total: villages.length,
//                         completed: 0,
//                         success: 0,
//                         failed: 0
//                 });

//                 // Ensure the console is visible
//                 setShowConsole(true);
//                 setShowHistory(true);

//                 // Add batch processing info to history and logs
//                 const batchTimestamp = new Date().toLocaleTimeString();
//                 const batchItem = {
//                         timestamp: batchTimestamp,
//                         tehsil: tehsil,
//                         village: null,
//                         status: 'batch-start',
//                         message: `Starting batch processing for ${getDisplayName(tehsil)} (${tehsil.code}) - ${villages.length} villages`
//                 };
//                 setRequestHistory(prev => [batchItem, ...prev]);

//                 addLogEntry({
//                         type: 'system',
//                         action: 'batch_start',
//                         tehsil: tehsil,
//                         message: `Starting batch processing for ${getDisplayName(tehsil)} (${tehsil.code}) - ${villages.length} villages`
//                 });

//                 // Process each village one by one
//                 for (let i = 0; i < villages.length; i++) {
//                         console.log("HIDHDIHDHD", i)
//                         if ((!isProcessingBatch && !isProcessingAllTehsils) ||
//                                 (isPartOfAllTehsils && !isProcessingAllTehsils)) break; // Allow cancellation

//                         const village = villages[i];

//                         // Update console with current progress
//                         const progressItem = {
//                                 timestamp: new Date().toLocaleTimeString(),
//                                 tehsil: tehsil,
//                                 village: village,
//                                 status: 'progress',
//                                 message: `Processing ${i + 1}/${villages.length}: ${getDisplayName(village)} (${village.value})`
//                         };
//                         setRequestHistory(prev => [progressItem, ...prev]);

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'process_village',
//                                 tehsil: tehsil,
//                                 village: village,
//                                 message: `Processing ${i + 1}/${villages.length}: ${getDisplayName(village)} (${village.value})`
//                         });

//                         // Select current village in UI
//                         setSelectedVillage(village);
//                         console.log("sele", selectedVillage)

//                         // Fetch data for this village - make an actual API request here
//                         const success = await fetchPropertyData(village, tehsil, true);

//                         // Update statistics
//                         setProcessingStats(prev => ({
//                                 ...prev,
//                                 completed: prev.completed + 1,
//                                 success: success ? prev.success + 1 : prev.success,
//                                 failed: success ? prev.failed : prev.failed + 1
//                         }));

//                         // Add small delay to prevent overwhelming the server
//                         await new Promise(resolve => setTimeout(resolve, 800));
//                 }

//                 // Add completion info to history
//                 const completionItem = {
//                         timestamp: new Date().toLocaleTimeString(),
//                         tehsil: tehsil,
//                         village: null,
//                         status: 'batch-complete',
//                         message: `Completed batch processing for ${getDisplayName(tehsil)} (${tehsil.code})`
//                 };
//                 setRequestHistory(prev => [completionItem, ...prev]);

//                 addLogEntry({
//                         type: 'system',
//                         action: 'batch_complete',
//                         tehsil: tehsil,
//                         message: `Completed batch processing for ${getDisplayName(tehsil)} (${tehsil.code}). Success: ${processingStats.success}, Failed: ${processingStats.failed}`
//                 });

//                 // Reset processing state if not part of all tehsils processing
//                 if (!isPartOfAllTehsils) {
//                         setIsProcessingBatch(false);
//                 }

//                 return true;
//         };

//         // // Function to process villages with a request queue for concurrent requests
//         // const processVillagesWithQueue = async (villages) => {
//         //         // Get maximum number of concurrent requests from state
//         //         const MAX_CONCURRENT_REQUESTS = maxConcurrentRequests;

//         //         // Queue of pending villages
//         //         const queue = [...villages];

//         //         // Currently active promises
//         //         const activePromises = [];

//         //         // Completed count
//         //         let completed = 0;

//         //         addLogEntry({
//         //                 type: 'system',
//         //                 action: 'queue_start',
//         //                 district: selectedDistrict,
//         //                 tehsil: selectedTehsil,
//         //                 message: `Starting queue processing with max ${MAX_CONCURRENT_REQUESTS} concurrent requests for ${villages.length} villages`
//         //         });

//         //         // Process village inside the queue system
//         //         const processVillage = async (village, currentIndex, totalCount) => {
//         //                 // Update UI to show current village being processed
//         //                 const progressItem = {
//         //                         timestamp: new Date().toLocaleTimeString(),
//         //                         district: selectedDistrict,
//         //                         tehsil: selectedTehsil,
//         //                         village: village,
//         //                         status: 'progress',
//         //                         message: `Processing ${currentIndex + 1}/${totalCount}: ${getDisplayName(village)} (${village.value})`
//         //                 };
//         //                 setRequestHistory(prev => [progressItem, ...prev]);

//         //                 addLogEntry({
//         //                         type: 'system',
//         //                         action: 'process_village',
//         //                         district: selectedDistrict,
//         //                         tehsil: selectedTehsil,
//         //                         village: village,
//         //                         message: `Processing (concurrent queue): ${getDisplayName(village)} (${village.value})`
//         //                 });

//         //                 // Make the actual API request
//         //                 return await fetchPropertyData(village, selectedTehsil, selectedDistrict, true);
//         //         };

//         //         // Process queue until all villages are processed
//         //         while (queue.length > 0 || activePromises.length > 0) {
//         //                 // Fill up the active promises array to max concurrent requests
//         //                 while (queue.length > 0 && activePromises.length < MAX_CONCURRENT_REQUESTS) {
//         //                         const village = queue.shift();

//         //                         // Create a promise for this village's API call
//         //                         const promise = processVillage(village, completed, villages.length)
//         //                                 .then(success => {
//         //                                         // Update stats based on success/failure
//         //                                         setProcessingStats(prev => ({
//         //                                                 ...prev,
//         //                                                 completed: prev.completed + 1,
//         //                                                 success: success ? prev.success + 1 : prev.success,
//         //                                                 failed: success ? prev.failed : prev.failed + 1
//         //                                         }));

//         //                                         completed++;

//         //                                         // Remove this promise from active promises
//         //                                         const index = activePromises.indexOf(promise);
//         //                                         if (index > -1) {
//         //                                                 activePromises.splice(index, 1);
//         //                                         }

//         //                                         return success;
//         //                                 });

//         //                         // Add to active promises
//         //                         activePromises.push(promise);
//         //                 }

//         //                 // Wait for at least one promise to complete if there are active promises
//         //                 if (activePromises.length > 0) {
//         //                         await Promise.race(activePromises);
//         //                 }

//         //                 // Check if processing has been cancelled
//         //                 if (!isProcessingBatch) {
//         //                         addLogEntry({
//         //                                 type: 'system',
//         //                                 action: 'queue_cancelled',
//         //                                 message: 'Queue processing cancelled by user'
//         //                         });
//         //                         break;
//         //                 }
//         //                 // Complete the queue processing function
//         //         }

//         //         addLogEntry({
//         //                 type: 'system',
//         //                 action: 'queue_complete',
//         //                 district: selectedDistrict,
//         //                 tehsil: selectedTehsil,
//         //                 message: `Completed queue processing for ${villages.length} villages`
//         //         });
//         // };

//         const processVillagesWithQueue = async (villages, tehsil = selectedTehsil) => {
//                 // Get maximum number of concurrent requests from state
//                 const MAX_CONCURRENT_REQUESTS = maxConcurrentRequests;

//                 // Set initial statistics
//                 setProcessingStats({
//                         total: villages.length,
//                         completed: 0,
//                         success: 0,
//                         failed: 0
//                 });

//                 addLogEntry({
//                         type: 'system',
//                         action: 'queue_start',
//                         district: selectedDistrict,
//                         tehsil: tehsil,
//                         message: `Starting batch processing with max ${MAX_CONCURRENT_REQUESTS} concurrent requests for ${villages.length} villages`
//                 });

//                 // Break villages into batches
//                 const totalBatches = Math.ceil(villages.length / MAX_CONCURRENT_REQUESTS);

//                 for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
//                         // Check if processing has been cancelled
//                         if (!isProcessingBatch && !isProcessingAllTehsils) {
//                                 addLogEntry({
//                                         type: 'system',
//                                         action: 'queue_cancelled',
//                                         message: 'Batch processing cancelled by user'
//                                 });
//                                 break;
//                         }

//                         // Calculate batch start and end indices
//                         const batchStart = batchIndex * MAX_CONCURRENT_REQUESTS;
//                         const batchEnd = Math.min((batchIndex + 1) * MAX_CONCURRENT_REQUESTS, villages.length);
//                         const currentBatch = villages.slice(batchStart, batchEnd);

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'batch_processing',
//                                 message: `Processing batch ${batchIndex + 1}/${totalBatches}: villages ${batchStart + 1}-${batchEnd} of ${villages.length}`
//                         });

//                         // Process all villages in this batch concurrently
//                         const batchPromises = currentBatch.map(village => {
//                                 const currentIndex = villages.indexOf(village);

//                                 // Update UI to show current village being processed
//                                 const progressItem = {
//                                         timestamp: new Date().toLocaleTimeString(),
//                                         district: selectedDistrict,
//                                         tehsil: tehsil,
//                                         village: village,
//                                         status: 'progress',
//                                         message: `Processing (batch ${batchIndex + 1}): ${currentIndex + 1}/${villages.length}: ${getDisplayName(village)} (${village.value})`
//                                 };
//                                 setRequestHistory(prev => [progressItem, ...prev]);

//                                 // Return a promise for this village's API call
//                                 return fetchPropertyData(village, tehsil, selectedDistrict, true)
//                                         .then(success => {
//                                                 // Update stats based on success/failure
//                                                 setProcessingStats(prev => ({
//                                                         ...prev,
//                                                         completed: prev.completed + 1,
//                                                         success: success ? prev.success + 1 : prev.success,
//                                                         failed: success ? prev.failed : prev.failed + 1
//                                                 }));

//                                                 return { village, success };
//                                         });
//                         });

//                         // Wait for all promises in this batch to complete
//                         const results = await Promise.all(batchPromises);

//                         // Log batch completion
//                         const batchSuccesses = results.filter(r => r.success).length;
//                         const batchFailures = results.length - batchSuccesses;

//                         addLogEntry({
//                                 type: 'system',
//                                 action: 'batch_complete',
//                                 message: `Completed batch ${batchIndex + 1}/${totalBatches}. Success: ${batchSuccesses}, Failed: ${batchFailures}`
//                         });

//                         // Small delay between batches to prevent overwhelming the server
//                         if (batchIndex < totalBatches - 1) {
//                                 await new Promise(resolve => setTimeout(resolve, 500));
//                         }
//                 }

//                 addLogEntry({
//                         type: 'system',
//                         action: 'queue_complete',
//                         district: selectedDistrict,
//                         tehsil: tehsil,
//                         message: `Completed batch processing for all ${villages.length} villages`
//                 });
//         };

//         // Stop all processing
//         const stopAllProcessing = () => {
//                 setIsProcessingBatch(false);

//                 addLogEntry({
//                         type: 'user',
//                         action: 'stop_processing',
//                         message: 'User stopped all automatic processing'
//                 });
//         };

//         // Function to export logs to a text file
//         const exportLogs = () => {
//                 // Create a formatted string with all log entries
//                 const logText = logEntriesRef.current.map(entry => {
//                         const date = new Date(entry.timestamp).toLocaleString();
//                         let logLine = `[${date}] `;

//                         if (entry.type === 'user') {
//                                 logLine += `USER ACTION: ${entry.action} - ${entry.message}`;
//                         } else if (entry.type === 'system') {
//                                 logLine += `SYSTEM: ${entry.action} - ${entry.message}`;
//                         } else if (entry.type === 'api') {
//                                 const districtInfo = entry.district ? `${getDisplayName(entry.district)} (${entry.district.code})` : 'N/A';
//                                 const tehsilInfo = entry.tehsil ? `${getDisplayName(entry.tehsil)} (${entry.tehsil.code})` : 'N/A';
//                                 const villageInfo = entry.village ? `${getDisplayName(entry.village)} (${entry.village.value})` : 'N/A';

//                                 logLine += `API ${entry.action.toUpperCase()}: [Status: ${entry.status}] [District: ${districtInfo}] [Tehsil: ${tehsilInfo}] [Village: ${villageInfo}] - ${entry.message}`;
//                         }

//                         return logLine;
//                 }).join('\n');

//                 // Create a blob with the log text
//                 const blob = new Blob([logText], { type: 'text/plain' });
//                 const url = URL.createObjectURL(blob);

//                 // Create a link element and trigger download
//                 const a = document.createElement('a');
//                 const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//                 a.href = url;
//                 a.download = `property-data-log-${timestamp}.txt`;
//                 document.body.appendChild(a);
//                 a.click();
//                 document.body.removeChild(a);
//                 URL.revokeObjectURL(url);

//                 setExportStatus('success');
//                 setTimeout(() => {
//                         setExportStatus(null);
//                 }, 2000);

//                 addLogEntry({
//                         type: 'system',
//                         action: 'export_logs',
//                         message: `User exported logs to file: property-data-log-${timestamp}.txt`
//                 });
//         };

//         // Navigate to saved records page
//         const navigateToSavedRecords = () => {
//                 navigate('/saved-records');
//         };

//         // Get displayed name based on current language
//         const getDisplayName = (item) => {
//                 if (!item) return '';
//                 return language === 'english' ? item.nameEn : item.name;
//         };

//         // Clear request history
//         const clearHistory = () => {
//                 setRequestHistory([]);

//                 addLogEntry({
//                         type: 'user',
//                         action: 'clear_history',
//                         message: 'User cleared request history'
//                 });
//         };

//         // Toggle console visibility
//         const toggleConsole = () => {
//                 setShowConsole(!showConsole);
//         };

//         // Toggle history visibility
//         const toggleHistory = () => {
//                 setShowHistory(!showHistory);
//         };

//         // Toggle logs visibility
//         const toggleLogs = () => {
//                 setShowLogs(!showLogs);
//         };

//         return (
//                 <div className="flex flex-row min-h-screen bg-gray-50">
//                         {/* Main Dashboard */}
//                         <div className="flex-1 p-6 overflow-y-auto">
//                                 <header className="text-center mb-8 relative">
//                                         {/* Language toggle button */}
//                                         <button
//                                                 onClick={toggleLanguage}
//                                                 className="absolute right-0 top-0 px-3 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-100 transition-colors"
//                                         >
//                                                 <Globe className="h-5 w-5 text-blue-600" />
//                                                 <span className="text-sm font-medium">{language === 'english' ? 'हिंदी' : 'English'}</span>
//                                         </button>

//                                         <h1 className="text-3xl font-bold text-gray-800 mb-2">{text.title}</h1>
//                                         <p className="text-gray-600">{text.subtitle}</p>
//                                 </header>

//                                 {/* View Saved Records Button */}
//                                 <div className="mb-8 flex justify-end">
//                                         <button
//                                                 onClick={navigateToSavedRecords}
//                                                 className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md flex items-center space-x-2 hover:bg-green-700 transition-colors"
//                                         >
//                                                 <Database className="h-5 w-5" />
//                                                 <span>{text.viewSavedRecords}</span>
//                                         </button>
//                                 </div>

//                                 {/* Concurrent Request Settings */}
//                                 <div className="mb-6 flex justify-between items-center">
//                                         {/* <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-md">
//                                                 <label className="text-gray-700 font-medium">Max Concurrent Requests:</label>
//                                                 <select
//                                                         className="border rounded px-2 py-1"
//                                                         value={maxConcurrentRequests}
//                                                         onChange={(e) => setMaxConcurrentRequests(parseInt(e.target.value))}
//                                                 >
//                                                         <option value="100">100 (Sequential)</option>
//                                                         <option value="3">3</option>
//                                                         <option value="5">5</option>
//                                                         <option value="10">10</option>
//                                                         <option value="15">15</option>
//                                                         <option value="20">20</option>
//                                                 </select>
//                                         </div> */}

//                                         <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-md">
//                                                 <label className="text-gray-700 font-medium">Max Concurrent Requests:</label>
//                                                 <select
//                                                         className="border rounded px-2 py-1"
//                                                         value={maxConcurrentRequests}
//                                                         onChange={(e) => setMaxConcurrentRequests(parseInt(e.target.value))}
//                                                 >
//                                                         <option value="1">1 (Sequential)</option>
//                                                         <option value="3">3 requests at once</option>
//                                                         <option value="5">5 requests at once</option>
//                                                         <option value="10">10 requests at once</option>
//                                                         <option value="15">15 requests at once</option>
//                                                         <option value="20">20 requests at once</option>
//                                                         <option value="30">30 requests at once</option>
//                                                         <option value="50">50 requests at once</option>
//                                                 </select>
//                                         </div>
//                                         <button
//                                                 onClick={exportLogs}
//                                                 className={`px-4 py-2 text-white rounded-lg shadow-md flex items-center space-x-2 transition-colors ${exportStatus === 'success'
//                                                         ? 'bg-green-600'
//                                                         : 'bg-blue-600 hover:bg-blue-700'
//                                                         }`}
//                                         >
//                                                 <FileText className="h-5 w-5" />
//                                                 <span>{exportStatus === 'success' ? text.logsExported : text.exportLogs}</span>
//                                         </button>
//                                 </div>

//                                 {/* District selection */}
//                                 <section className="mb-8">
//                                         <h2 className="text-xl font-semibold text-gray-700 mb-4">{text.selectDistrict}</h2>

//                                         {loadingDistricts ? (
//                                                 <div className="text-center py-4">
//                                                         <p className="text-gray-600">{text.loadingDistricts}</p>
//                                                 </div>
//                                         ) : districtError ? (
//                                                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//                                                         <span className="block sm:inline">{text.fetchDistrictError} {districtError}</span>
//                                                 </div>
//                                         ) : districts.length === 0 ? (
//                                                 <div className="text-center py-4">
//                                                         <p className="text-gray-600">{text.noDistricts}</p>
//                                                 </div>
//                                         ) : (
//                                                 <div className="flex flex-wrap gap-3">
//                                                         {districts.map((district) => (
//                                                                 <button
//                                                                         key={district.code}
//                                                                         onClick={() => handleDistrictSelect(district)}
//                                                                         className={`px-4 py-2 rounded-full transition-all ${selectedDistrict?.code === district.code
//                                                                                 ? 'bg-blue-600 text-white shadow-lg'
//                                                                                 : 'bg-white text-gray-700 shadow hover:shadow-md hover:bg-blue-50'
//                                                                                 }`}
//                                                                 >
//                                                                         {getDisplayName(district)} ({district.code})
//                                                                 </button>
//                                                         ))}
//                                                 </div>
//                                         )}
//                                 </section>

//                                 {/* Tehsil selection - only show if district is selected */}
//                                 {selectedDistrict && (
//                                         <section className="mb-8">
//                                                 <h2 className="text-xl font-semibold text-gray-700 mb-4">{text.selectTehsil}</h2>

//                                                 {loadingTehsils ? (
//                                                         <div className="text-center py-4">
//                                                                 <p className="text-gray-600">{text.loadingTehsils}</p>
//                                                         </div>
//                                                 ) : tehsilError ? (
//                                                         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//                                                                 <span className="block sm:inline">{text.fetchTehsilError} {tehsilError}</span>
//                                                         </div>
//                                                 ) : tehsils.length === 0 ? (
//                                                         <div className="text-center py-4">
//                                                                 <p className="text-gray-600">{text.noTehsils}</p>
//                                                         </div>
//                                                 ) : (
//                                                         <div className="flex flex-wrap gap-3">
//                                                                 {tehsils.map((tehsil) => (
//                                                                         <button
//                                                                                 key={tehsil.sroCode}
//                                                                                 onClick={() => handleTehsilSelect(tehsil)}
//                                                                                 className={`px-4 py-2 rounded-full transition-all ${selectedTehsil?.sroCode === tehsil.sroCode
//                                                                                         ? 'bg-blue-600 text-white shadow-lg'
//                                                                                         : 'bg-white text-gray-700 shadow hover:shadow-md hover:bg-blue-50'
//                                                                                         }`}
//                                                                         >
//                                                                                 {tehsil.sroName} ({tehsil.sroCode})
//                                                                         </button>
//                                                                 ))}
//                                                         </div>
//                                                 )}
//                                         </section>
//                                 )}

//                                 {/* Village selection */}
//                                 {selectedTehsil && (
//                                         <section>
//                                                 <div className="bg-white p-5 rounded-xl shadow-md">
//                                                         <div className="flex items-center justify-between mb-6">
//                                                                 <h2 className="text-xl font-semibold text-gray-700">
//                                                                         {getDisplayName(selectedDistrict)} - {getDisplayName(selectedTehsil)} {text.villagesOf} - {filteredVillages?.length}
//                                                                 </h2>

//                                                                 <div className="flex gap-3">
//                                                                         {/* Search box */}
//                                                                         <div className="relative w-72">
//                                                                                 <input
//                                                                                         type="text"
//                                                                                         placeholder={text.searchPlaceholder}
//                                                                                         value={searchTerm}
//                                                                                         onChange={handleSearchChange}
//                                                                                         className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                                                                 />
//                                                                                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                                                                         </div>

//                                                                         {/* Auto-Process Button */}
//                                                                         <button
//                                                                                 onClick={startAllTehsilsProcessing}

//                                                                                 className={`px-4 py-2 rounded-lg shadow flex items-center space-x-2 ${filteredVillages.length === 0 || isProcessingBatch
//                                                                                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                                                                         : 'bg-purple-600 text-white hover:bg-purple-700'
//                                                                                         } transition-colors`}
//                                                                         >
//                                                                                 <Database className="h-5 w-5 mr-1" />
//                                                                                 <span>{text.autoFetch}</span>
//                                                                         </button>

//                                                                         {/* Fetch Data Button */}
//                                                                         <button
//                                                                                 onClick={() => fetchPropertyData()}
//                                                                                 disabled={!selectedVillage || fetchStatus === 'loading'}
//                                                                                 className={`px-4 py-2 rounded-lg shadow flex items-center space-x-2 ${!selectedVillage
//                                                                                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                                                                         : fetchStatus === 'loading'
//                                                                                                 ? 'bg-blue-400 text-white cursor-wait'
//                                                                                                 : fetchStatus === 'success'
//                                                                                                         ? 'bg-green-600 text-white'
//                                                                                                         : fetchStatus === 'error'
//                                                                                                                 ? 'bg-red-600 text-white'
//                                                                                                                 : 'bg-blue-600 text-white hover:bg-blue-700'
//                                                                                         } transition-colors`}
//                                                                         >
//                                                                                 <span>
//                                                                                         {fetchStatus === 'loading'
//                                                                                                 ? text.fetchingData
//                                                                                                 : fetchStatus === 'success'
//                                                                                                         ? text.fetchSuccess
//                                                                                                         : fetchStatus === 'error'
//                                                                                                                 ? text.fetchError
//                                                                                                                 : text.fetchData}
//                                                                                 </span>
//                                                                         </button>
//                                                                 </div>
//                                                         </div>

//                                                         {loadingVillages ? (
//                                                                 <div className="text-center py-10">
//                                                                         <p className="text-gray-600">{text.loadingVillages}</p>
//                                                                 </div>
//                                                         ) : (
//                                                                 <>
//                                                                         {/* Village grid */}
//                                                                         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//                                                                                 {filteredVillages.map((village) => (
//                                                                                         <div
//                                                                                                 key={village.value}
//                                                                                                 className={`p-3 rounded-lg border transition-colors cursor-pointer ${selectedVillage?.value === village.value
//                                                                                                         ? 'bg-blue-100 border-blue-400'
//                                                                                                         : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-200'
//                                                                                                         }`}
//                                                                                                 onClick={() => handleVillageSelect(village)}
//                                                                                         >
//                                                                                                 <div className="font-medium">{getDisplayName(village)}</div>
//                                                                                                 <div className="text-sm text-gray-500">{text.code}: {village.value}</div>
//                                                                                         </div>
//                                                                                 ))}
//                                                                         </div>

//                                                                         {/* Empty state */}
//                                                                         {filteredVillages.length === 0 && !loadingVillages && (
//                                                                                 <div className="text-center py-10 text-gray-500">
//                                                                                         {searchTerm ? text.noResultsSearch : text.noResults}
//                                                                                 </div>
//                                                                         )}
//                                                                 </>
//                                                         )}

//                                                         {/* Batch processing info for main dashboard */}
//                                                         {isProcessingBatch && (
//                                                                 <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500 max-w-md z-50">
//                                                                         <div className="font-medium text-gray-800 flex justify-between">
//                                                                                 <span>{text.batchProgress}</span>
//                                                                                 <span className="font-bold">{processingStats.completed}/{processingStats.total}</span>
//                                                                         </div>
//                                                                         <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
//                                                                                 <div
//                                                                                         className="bg-blue-600 h-2.5 rounded-full transition-all"
//                                                                                         style={{ width: `${(processingStats.completed / processingStats.total) * 100}%` }}
//                                                                                 ></div>
//                                                                         </div>
//                                                                         <div className="flex justify-between text-sm">
//                                                                                 <span className="text-green-600">{text.success} {processingStats.success}</span>
//                                                                                 <span className="text-red-600">{text.failed} {processingStats.failed}</span>
//                                                                         </div>
//                                                                         <button
//                                                                                 onClick={stopAllProcessing}
//                                                                                 className="mt-2 w-full bg-red-600 text-white text-xs px-2 py-1 rounded"
//                                                                         >
//                                                                                 {text.stopProcessing}
//                                                                         </button>
//                                                                 </div>
//                                                         )}
//                                                 </div>
//                                         </section>
//                                 )}
//                         </div>

//                         {/* Side Console - toggle visibility with button */}
//                         <div className={`bg-gray-900 text-white transition-all duration-300 ${showConsole ? 'w-96' : 'w-12'}`}>
//                                 <div className="h-full flex flex-col">
//                                         {/* Console Header */}
//                                         <div className="flex items-center justify-between p-3 border-b border-gray-700">
//                                                 {showConsole ? (
//                                                         <>
//                                                                 <div className="flex items-center">
//                                                                         <Terminal className="h-5 w-5 mr-2" />
//                                                                         <h3 className="font-medium">{text.consoleTitle}</h3>
//                                                                 </div>
//                                                                 <button
//                                                                         onClick={toggleConsole}
//                                                                         className="text-gray-400 hover:text-white"
//                                                                 >
//                                                                         <X className="h-5 w-5" />
//                                                                 </button>
//                                                         </>
//                                                 ) : (
//                                                         <button
//                                                                 onClick={toggleConsole}
//                                                                 className="w-full flex justify-center text-gray-400 hover:text-white"
//                                                         >
//                                                                 <Terminal className="h-5 w-5" />
//                                                         </button>
//                                                 )}
//                                         </div>

//                                         {/* Console Content */}
//                                         {showConsole && (
//                                                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                                                         {/* Current Selection Info */}
//                                                         <div className="bg-gray-800 rounded-lg p-3 space-y-2">
//                                                                 <div className="flex items-center justify-between">
//                                                                         <span className="text-green-400 font-semibold">{text.autoFetch}</span>
//                                                                         {isProcessingBatch && (
//                                                                                 <button
//                                                                                         onClick={stopAllProcessing}
//                                                                                         className="bg-red-600 text-white text-xs px-2 py-1 rounded"
//                                                                                 >
//                                                                                         {text.stopProcessing}
//                                                                                 </button>
//                                                                         )}
//                                                                 </div>

//                                                                 {/* Concurrent Processing Status */}
//                                                                 {isProcessingBatch && (
//                                                                         <div className="mt-2 bg-gray-700 p-2 rounded">
//                                                                                 <div className="flex justify-between text-xs mb-1">
//                                                                                         <span>Concurrent Requests:</span>
//                                                                                         <span>{maxConcurrentRequests}</span>
//                                                                                 </div>
//                                                                                 <div className="flex justify-between text-xs mb-1">
//                                                                                         <span>{text.batchProgress}</span>
//                                                                                         <span>{processingStats.completed}/{processingStats.total}</span>
//                                                                                 </div>
//                                                                                 <div className="w-full bg-gray-600 rounded-full h-2.5">
//                                                                                         <div
//                                                                                                 className="bg-blue-500 h-2.5 rounded-full"
//                                                                                                 style={{ width: `${(processingStats.completed / processingStats.total) * 100}%` }}
//                                                                                         ></div>
//                                                                                 </div>
//                                                                                 <div className="flex justify-between text-xs mt-1">
//                                                                                         <span className="text-green-400">{text.success} {processingStats.success}</span>
//                                                                                         <span className="text-red-400">{text.failed} {processingStats.failed}</span>
//                                                                                 </div>
//                                                                         </div>
//                                                                 )}

//                                                                 <div>
//                                                                         <p className="text-gray-400 text-sm">{text.currentDistrict}</p>
//                                                                         <p className="font-mono">
//                                                                                 {selectedDistrict
//                                                                                         ? `${getDisplayName(selectedDistrict)} (${selectedDistrict.code})`
//                                                                                         : text.noSelection
//                                                                                 }
//                                                                         </p>
//                                                                 </div>
//                                                                 <div>
//                                                                         <p className="text-gray-400 text-sm">{text.currentTehsil}</p>
//                                                                         <p className="font-mono">
//                                                                                 {selectedTehsil
//                                                                                         ? `${selectedTehsil.sroName} (${selectedTehsil.sroCode})`
//                                                                                         : text.noSelection
//                                                                                 }
//                                                                         </p>
//                                                                 </div>
//                                                                 <div>
//                                                                         <p className="text-gray-400 text-sm">{text.currentVillage}</p>
//                                                                         <p className="font-mono">
//                                                                                 {selectedVillage
//                                                                                         ? `${getDisplayName(selectedVillage)} (${selectedVillage.value})`
//                                                                                         : text.noSelection
//                                                                                 }
//                                                                         </p>
//                                                                 </div>
//                                                         </div>

//                                                         {/* Log Export Section */}
//                                                         <div className="bg-gray-800 rounded-lg p-3">
//                                                                 <button
//                                                                         onClick={exportLogs}
//                                                                         className="w-full py-2 bg-blue-600 text-white rounded flex items-center justify-center gap-2 hover:bg-blue-700"
//                                                                 >
//                                                                         <Download className="h-4 w-4" />
//                                                                         <span>{text.downloadLogs}</span>
//                                                                 </button>
//                                                         </div>

//                                                         {/* Request History Section */}
//                                                         <div className="bg-gray-800 rounded-lg p-3">
//                                                                 <div
//                                                                         className="flex items-center justify-between cursor-pointer"
//                                                                         onClick={toggleHistory}
//                                                                 >
//                                                                         <h4 className="font-medium">{text.requestsHistory}</h4>
//                                                                         <button className="text-gray-400 hover:text-white">
//                                                                                 {showHistory ? (
//                                                                                         <ChevronUp className="h-4 w-4" />
//                                                                                 ) : (
//                                                                                         <ChevronDown className="h-4 w-4" />
//                                                                                 )}
//                                                                         </button>
//                                                                 </div>

//                                                                 {showHistory && (
//                                                                         <>
//                                                                                 {requestHistory.length > 0 ? (
//                                                                                         <div className="mt-2 space-y-2">
//                                                                                                 <div className="flex justify-end">
//                                                                                                         <button
//                                                                                                                 onClick={clearHistory}
//                                                                                                                 className="text-xs text-gray-400 hover:text-white"
//                                                                                                         >
//                                                                                                                 {text.clearHistory}
//                                                                                                         </button>
//                                                                                                 </div>

//                                                                                                 <div className="max-h-60 overflow-y-auto space-y-2">
//                                                                                                         {requestHistory.map((item, index) => (
//                                                                                                                 <div key={index} className={`text-xs p-2 rounded ${item.status === 'batch-start' || item.status === 'batch-complete'
//                                                                                                                         ? 'bg-blue-900'
//                                                                                                                         : 'bg-gray-700'
//                                                                                                                         }`}>
//                                                                                                                         <div className="flex justify-between">
//                                                                                                                                 <span>{item.timestamp}</span>
//                                                                                                                                 <span className={
//                                                                                                                                         item.status === 'success' ? 'text-green-400' :
//                                                                                                                                                 item.status === 'error' ? 'text-red-400' :
//                                                                                                                                                         item.status === 'batch-start' ? 'text-blue-400' :
//                                                                                                                                                                 item.status === 'batch-complete' ? 'text-blue-400' :
//                                                                                                                                                                         item.status === 'progress' ? 'text-blue-300' :
//                                                                                                                                                                                 'text-yellow-400'
//                                                                                                                                 }>
//                                                                                                                                         {item.status}
//                                                                                                                                 </span>
//                                                                                                                         </div>
//                                                                                                                         <p className="mt-1 text-gray-300 break-words">{item.message}</p>
//                                                                                                                 </div>
//                                                                                                         ))}
//                                                                                                 </div>
//                                                                                         </div>
//                                                                                 ) : (
//                                                                                         <p className="text-gray-500 text-sm mt-2">No requests yet</p>
//                                                                                 )}
//                                                                         </>
//                                                                 )}
//                                                         </div>

//                                                         {/* Logs Section */}
//                                                         <div className="bg-gray-800 rounded-lg p-3">
//                                                                 <div
//                                                                         className="flex items-center justify-between cursor-pointer"
//                                                                         onClick={toggleLogs}
//                                                                 >
//                                                                         <h4 className="font-medium">{text.logsSection}</h4>
//                                                                         <button className="text-gray-400 hover:text-white">
//                                                                                 {showLogs ? (
//                                                                                         <ChevronUp className="h-4 w-4" />
//                                                                                 ) : (
//                                                                                         <ChevronDown className="h-4 w-4" />
//                                                                                 )}
//                                                                         </button>
//                                                                 </div>

//                                                                 {showLogs && (
//                                                                         <>
//                                                                                 {logEntries.length > 0 ? (
//                                                                                         <div className="mt-2">
//                                                                                                 <div className="max-h-60 overflow-y-auto space-y-1">
//                                                                                                         {logEntries.slice(0, 50).map((entry, index) => (
//                                                                                                                 <div key={index} className="text-xs p-1 border-b border-gray-700">
//                                                                                                                         <div className="flex justify-between">
//                                                                                                                                 <span className="text-gray-400">
//                                                                                                                                         {new Date(entry.timestamp).toLocaleTimeString()}
//                                                                                                                                 </span>
//                                                                                                                                 <span className={
//                                                                                                                                         entry.type === 'api'
//                                                                                                                                                 ? (entry.status === 'success' ? 'text-green-400' :
//                                                                                                                                                         entry.status === 'error' ? 'text-red-400' : 'text-yellow-400')
//                                                                                                                                                 : entry.type === 'system' ? 'text-blue-400' : 'text-purple-400'
//                                                                                                                                 }>
//                                                                                                                                         {entry.type.toUpperCase()}
//                                                                                                                                 </span>
//                                                                                                                         </div>
//                                                                                                                         <p className="mt-1 text-gray-300 text-xs break-words">{entry.message}</p>
//                                                                                                                 </div>
//                                                                                                         ))}
//                                                                                                         {logEntries.length > 50 && (
//                                                                                                                 <div className="text-xs text-center text-gray-500 p-1">
//                                                                                                                         + {logEntries.length - 50} more entries (available in export)
//                                                                                                                 </div>
//                                                                                                         )}
//                                                                                                 </div>
//                                                                                         </div>
//                                                                                 ) : (
//                                                                                         <p className="text-gray-500 text-sm mt-2">No logs yet</p>
//                                                                                 )}
//                                                                         </>
//                                                                 )}
//                                                         </div>
//                                                 </div>
//                                         )}
//                                 </div>
//                         </div>
//                 </div>
//         );
// };

// export default DistrictVillageDashboardNew;



import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Database, X, Terminal, ChevronDown, ChevronUp, Download, FileText, Building, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../utils/base_url';

// Language translations
const translations = {
        english: {
                title: "District, Tehsil, and Village Dashboard",
                subtitle: "Select a District, then Tehsil/SRO to automatically process all villages",
                selectDistrict: "Select District:",
                selectTehsil: "Select Tehsil/SRO:",
                villagesOf: "Villages of",
                searchPlaceholder: "Search village...",
                fetchData: "Fetch Property Data",
                code: "Code",
                noResultsSearch: "No villages found for your search.",
                noResults: "No villages found for this tehsil.",
                fetchingData: "Fetching property data...",
                fetchSuccess: "Property data fetched successfully!",
                fetchError: "Error fetching property data.",
                viewSavedRecords: "View Saved Records",
                console: "Console",
                consoleTitle: "API Request Console",
                currentDistrict: "Current District:",
                currentTehsil: "Current Tehsil/SRO:",
                currentVillage: "Current Village:",
                districtCode: "District Code:",
                noSelection: "None selected",
                autoFetch: "Auto Batch Processing",
                hideConsole: "Hide Console",
                showConsole: "Show Console",
                requestsHistory: "Request History",
                clearHistory: "Clear History",
                timestamp: "Timestamp",
                requestStatus: "Status",
                stopProcessing: "Stop Processing",
                batchProgress: "Processing Batch:",
                success: "Success:",
                failed: "Failed:",
                exportLogs: "Export Logs",
                logsExported: "Logs exported successfully!",
                downloadLogs: "Download Log File",
                processingLog: "Processing Log",
                viewLogs: "View Logs",
                logsSection: "API Logs",
                loadingDistricts: "Loading districts...",
                loadingTehsils: "Loading tehsils for selected district...",
                fetchDistrictError: "Error fetching districts.",
                fetchTehsilError: "Error fetching tehsils.",
                noDistricts: "No districts found.",
                noTehsils: "No tehsils found for this district.",
                loadingVillages: "Loading villages..."
        },
        hindi: {
                title: "जिला, तहसील और गांव डैशबोर्ड",
                subtitle: "सभी गांवों को स्वचालित रूप से प्रोसेस करने के लिए जिला, फिर तहसील/एसआरओ का चयन करें",
                selectDistrict: "जिला चुनें:",
                selectTehsil: "तहसील/एसआरओ चुनें:",
                villagesOf: "के गांव",
                searchPlaceholder: "गांव खोजें...",
                fetchData: "सम्पत्ति डेटा प्राप्त करें",
                code: "कोड",
                noResultsSearch: "खोज के अनुसार कोई गांव नहीं मिला।",
                noResults: "इस तहसील के लिए कोई गांव नहीं मिला।",
                fetchingData: "सम्पत्ति डेटा प्राप्त किया जा रहा है...",
                fetchSuccess: "सम्पत्ति डेटा सफलतापूर्वक प्राप्त किया गया!",
                fetchError: "सम्पत्ति डेटा प्राप्त करने में त्रुटि।",
                viewSavedRecords: "सहेजे गए रिकॉर्ड देखें",
                console: "कंसोल",
                consoleTitle: "एपीआई अनुरोध कंसोल",
                currentDistrict: "वर्तमान जिला:",
                currentTehsil: "वर्तमान तहसील/एसआरओ:",
                currentVillage: "वर्तमान गांव:",
                districtCode: "जिला कोड:",
                noSelection: "कोई चयन नहीं",
                autoFetch: "स्वचालित बैच प्रोसेसिंग",
                hideConsole: "कंसोल छिपाएं",
                showConsole: "कंसोल दिखाएं",
                requestsHistory: "अनुरोध इतिहास",
                clearHistory: "इतिहास साफ़ करें",
                timestamp: "समय",
                requestStatus: "स्थिति",
                stopProcessing: "प्रोसेसिंग रोकें",
                batchProgress: "बैच प्रोसेसिंग:",
                success: "सफल:",
                failed: "असफल:",
                exportLogs: "लॉग निर्यात करें",
                logsExported: "लॉग सफलतापूर्वक निर्यात किए गए!",
                downloadLogs: "लॉग फ़ाइल डाउनलोड करें",
                processingLog: "प्रोसेसिंग लॉग",
                viewLogs: "लॉग देखें",
                logsSection: "एपीआई लॉग",
                loadingDistricts: "जिले लोड हो रहे हैं...",
                loadingTehsils: "चयनित जिले के लिए तहसीलें लोड हो रही हैं...",
                fetchDistrictError: "जिले प्राप्त करने में त्रुटि।",
                fetchTehsilError: "तहसीलें प्राप्त करने में त्रुटि।",
                noDistricts: "कोई जिला नहीं मिला।",
                noTehsils: "इस जिले के लिए कोई तहसील नहीं मिली।",
                loadingVillages: "गांव लोड हो रहे हैं..."
        }
};

const DistrictVillageDashboardNew = () => {
        const navigate = useNavigate();
        // State for district, tehsil, and village data
        const [districts, setDistricts] = useState([]);
        const [tehsils, setTehsils] = useState([]); // SROs for selected district
        const [villages, setVillages] = useState([]);

        const [selectedDistrict, setSelectedDistrict] = useState(null);
        const [selectedTehsil, setSelectedTehsil] = useState(null);
        const [selectedVillage, setSelectedVillage] = useState(null);

        const [searchTerm, setSearchTerm] = useState('');
        const [filteredVillages, setFilteredVillages] = useState([]);

        const [language, setLanguage] = useState('english'); // Default to English
        const [fetchStatus, setFetchStatus] = useState(null); // null, 'loading', 'success', 'error'
        const [showConsole, setShowConsole] = useState(true);
        const [requestHistory, setRequestHistory] = useState([]);
        const [showHistory, setShowHistory] = useState(true);
        const [isProcessingBatch, setIsProcessingBatch] = useState(false);
        const [processingStats, setProcessingStats] = useState({
                total: 0,
                completed: 0,
                success: 0,
                failed: 0
        });

        // Batch progress tracking
        const [batchProgress, setBatchProgress] = useState({
                currentBatch: 0,
                totalBatches: 0,
                batchSize: 0,
                currentBatchProgress: 0
        });

        // Loading states
        const [loadingDistricts, setLoadingDistricts] = useState(false);
        const [loadingTehsils, setLoadingTehsils] = useState(false);
        const [loadingVillages, setLoadingVillages] = useState(false);
        const [districtError, setDistrictError] = useState(null);
        const [tehsilError, setTehsilError] = useState(null);
        const [villageError, setVillageError] = useState(null);

        // Enhanced functionality states
        const [logEntries, setLogEntries] = useState([]);
        const [showLogs, setShowLogs] = useState(true);
        const [exportStatus, setExportStatus] = useState(null);
        const [maxConcurrentRequests, setMaxConcurrentRequests] = useState(50);

        const [isProcessingAllTehsils, setIsProcessingAllTehsils] = useState(false);

        // Refs to track active requests and cancellation state
        const activeRequestsRef = useRef(new Set());
        const cancelProcessingRef = useRef(false);

        // Ref to store log entries for export
        const logEntriesRef = useRef([]);

        // Toggle language function
        const toggleLanguage = () => {
                setLanguage(language === 'english' ? 'hindi' : 'english');
        };

        // Get current language text
        const text = translations[language];

        // Update the log entries ref whenever the state changes
        useEffect(() => {
                logEntriesRef.current = logEntries;
        }, [logEntries]);

        // Fetch all districts on component mount
        useEffect(() => {
                fetchDistricts();
        }, []);

        // Function to add a log entry
        const addLogEntry = (entry) => {
                const timestamp = new Date().toISOString();
                const logEntry = {
                        timestamp,
                        ...entry
                };

                setLogEntries(prevLogs => [...prevLogs, logEntry]);

                // Also add to request history for console display
                if (entry.type === 'api') {
                        const historyItem = {
                                timestamp: new Date().toLocaleTimeString(),
                                district: entry.district,
                                tehsil: entry.tehsil,
                                village: entry.village,
                                status: entry.status,
                                message: entry.message
                        };
                        setRequestHistory(prev => [historyItem, ...prev]);
                }
        };

        // Fetch districts from API
        const fetchDistricts = async () => {
                setLoadingDistricts(true);
                setDistrictError(null);

                try {
                        addLogEntry({
                                type: 'system',
                                action: 'fetch_districts',
                                message: 'Fetching all districts'
                        });

                        const response = await fetch(`${base_url}/district/api/districts`);

                        if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const data = await response.json();

                        if (Array.isArray(data)) {
                                // Format the districts for our component
                                const formattedDistricts = data.map(district => ({
                                        code: district.districtCode,
                                        name: district.districtName || `District ${district.districtCode}`,
                                        nameEn: district.districtName || `District ${district.districtCode}`
                                }));

                                setDistricts(formattedDistricts);

                                addLogEntry({
                                        type: 'system',
                                        action: 'fetch_districts_success',
                                        message: `Successfully fetched ${formattedDistricts.length} districts`
                                });
                        } else {
                                setDistricts([]);
                                addLogEntry({
                                        type: 'system',
                                        action: 'fetch_districts_error',
                                        message: 'Invalid district data format received'
                                });
                        }
                } catch (error) {
                        console.error('Error fetching districts:', error);
                        setDistrictError(error.message);

                        addLogEntry({
                                type: 'system',
                                action: 'fetch_districts_error',
                                message: `Error fetching districts: ${error.message}`
                        });
                } finally {
                        setLoadingDistricts(false);
                }
        };

        // Updated function to process villages with true concurrent batching
        const processVillagesWithQueue = async (villages, tehsil = selectedTehsil) => {
                // Reset cancellation flag at the start of processing
                cancelProcessingRef.current = false;
                activeRequestsRef.current.clear();

                // Get maximum number of concurrent requests from state
                const MAX_CONCURRENT_REQUESTS = maxConcurrentRequests;

                // Set initial statistics
                setProcessingStats({
                        total: villages.length,
                        completed: 0,
                        success: 0,
                        failed: 0
                });

                addLogEntry({
                        type: 'system',
                        action: 'queue_start',
                        district: selectedDistrict,
                        tehsil: tehsil,
                        message: `Starting batch processing with max ${MAX_CONCURRENT_REQUESTS} concurrent requests for ${villages.length} villages`
                });

                // Break villages into batches for better progress tracking
                const totalBatches = Math.ceil(villages.length / MAX_CONCURRENT_REQUESTS);

                for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
                        // Check if processing has been cancelled
                        if (cancelProcessingRef.current) {
                                addLogEntry({
                                        type: 'system',
                                        action: 'queue_cancelled',
                                        message: 'Batch processing cancelled by user'
                                });
                                break;
                        }

                        // Calculate batch start and end indices
                        const batchStart = batchIndex * MAX_CONCURRENT_REQUESTS;
                        const batchEnd = Math.min((batchIndex + 1) * MAX_CONCURRENT_REQUESTS, villages.length);
                        const currentBatch = villages.slice(batchStart, batchEnd);

                        // Update batch progress for UI
                        setBatchProgress({
                                currentBatch: batchIndex + 1,
                                totalBatches,
                                batchSize: currentBatch.length,
                                currentBatchProgress: 0
                        });

                        addLogEntry({
                                type: 'system',
                                action: 'batch_processing',
                                message: `Processing batch ${batchIndex + 1}/${totalBatches}: villages ${batchStart + 1}-${batchEnd} of ${villages.length}`
                        });

                        // Create an array to hold all promises for this batch
                        const batchPromises = [];

                        // For each village in the current batch, create a processing promise
                        for (const village of currentBatch) {
                                const villageIndex = villages.indexOf(village);

                                // Create a promise for this village
                                const villagePromise = new Promise(async (resolve) => {
                                        try {
                                                // Update UI to show current village being processed
                                                const progressItem = {
                                                        timestamp: new Date().toLocaleTimeString(),
                                                        district: selectedDistrict,
                                                        tehsil: tehsil,
                                                        village: village,
                                                        status: 'progress',
                                                        message: `Processing ${villageIndex + 1}/${villages.length}: ${getDisplayName(village)} (${village.value})`
                                                };
                                                setRequestHistory(prev => [progressItem, ...prev]);

                                                // Process this village (make the API call)
                                                const success = await fetchPropertyData(village, tehsil, selectedDistrict, true);

                                                // Update statistics
                                                setProcessingStats(prev => {
                                                        const newCompleted = prev.completed + 1;
                                                        return {
                                                                total: prev.total,
                                                                completed: newCompleted,
                                                                success: success ? prev.success + 1 : prev.success,
                                                                failed: success ? prev.failed : prev.failed + 1
                                                        };
                                                });

                                                // Update batch progress
                                                setBatchProgress(prev => ({
                                                        ...prev,
                                                        currentBatchProgress: prev.currentBatchProgress + 1
                                                }));

                                                resolve({ village, success });
                                        } catch (error) {
                                                console.error(`Error processing village ${village.value}:`, error);

                                                // Update statistics even on error
                                                setProcessingStats(prev => ({
                                                        ...prev,
                                                        completed: prev.completed + 1,
                                                        failed: prev.failed + 1
                                                }));

                                                // Update batch progress
                                                setBatchProgress(prev => ({
                                                        ...prev,
                                                        currentBatchProgress: prev.currentBatchProgress + 1
                                                }));

                                                resolve({ village, success: false });
                                        }
                                });

                                batchPromises.push(villagePromise);
                        }

                        // Wait for all promises in this batch to complete using Promise.all
                        // This is what makes the requests run concurrently
                        await Promise.all(batchPromises);

                        // Log batch completion
                        addLogEntry({
                                type: 'system',
                                action: 'batch_complete',
                                message: `Completed batch ${batchIndex + 1}/${totalBatches}`
                        });

                        // Small delay between batches to prevent overwhelming the server
                        if (batchIndex < totalBatches - 1 && !cancelProcessingRef.current) {
                                await new Promise(resolve => setTimeout(resolve, 500));
                        }
                }

                const stats = {
                        total: villages.length,
                        completed: processingStats.completed,
                        success: processingStats.success,
                        failed: processingStats.failed
                };

                addLogEntry({
                        type: 'system',
                        action: 'queue_complete',
                        district: selectedDistrict,
                        tehsil: tehsil,
                        message: `Completed batch processing for all ${villages.length} villages. Success: ${stats.success}, Failed: ${stats.failed}`
                });
        };

        // Updated function to process all tehsils
        const startAllTehsilsProcessing = async () => {
                if (isProcessingAllTehsils || isProcessingBatch || !selectedDistrict) return;

                // Reset cancellation flag
                cancelProcessingRef.current = false;

                // Set processing state
                setIsProcessingAllTehsils(true);

                // Log the start of all-tehsil processing
                addLogEntry({
                        type: 'system',
                        action: 'start_all_tehsils',
                        message: `Starting automatic processing of all Tehsils with batch processing`
                });

                // Ensure the console is visible
                setShowConsole(true);
                setShowHistory(true);

                console.log(`Starting processing of all tehsils: ${tehsils.length} tehsils found`);

                // Process each tehsil one by one
                for (let i = 0; i < tehsils.length; i++) {
                        if (cancelProcessingRef.current) {
                                console.log("Processing stopped by user");
                                break; // Allow cancellation
                        }

                        const tehsil = tehsils[i];
                        console.log(`Processing tehsil ${i + 1}/${tehsils.length}: ${tehsil.sroCode} - ${tehsil.sroName}`);

                        addLogEntry({
                                type: 'system',
                                action: 'process_tehsil',
                                tehsil: tehsil,
                                message: `Processing Tehsil ${i + 1}/${tehsils.length}: ${tehsil.sroName} (${tehsil.sroCode})`
                        });

                        // Set current tehsil in UI and state
                        setSelectedTehsil(tehsil);

                        try {
                                // Fetch villages for this tehsil
                                setLoadingVillages(true);
                                const response = await fetch(`${base_url}/village/api/villages?districtCode=${selectedDistrict.code}&sroCode=${tehsil.sroCode}&limit=1000`);

                                if (!response.ok) {
                                        throw new Error(`HTTP error! Status: ${response.status}`);
                                }

                                const data = await response.json();

                                if (data.success && Array.isArray(data.villages)) {
                                        // Format the villages
                                        const formattedVillages = data.villages.map(village => ({
                                                value: village.villageCode,
                                                name: village.villageName,
                                                nameEn: village.villageName
                                        }));

                                        setVillages(formattedVillages);
                                        setFilteredVillages(formattedVillages);

                                        console.log(`Found ${formattedVillages.length} villages for tehsil ${tehsil.sroCode}`);

                                        // Process villages in batches if we have any
                                        if (formattedVillages.length > 0) {
                                                // Use the improved queue system to process multiple requests concurrently
                                                await processVillagesWithQueue(formattedVillages, tehsil);

                                                addLogEntry({
                                                        type: 'system',
                                                        action: 'tehsil_villages_complete',
                                                        tehsil: tehsil,
                                                        message: `Completed processing all villages for Tehsil: ${tehsil.sroName} (${tehsil.sroCode})`
                                                });
                                        } else {
                                                addLogEntry({
                                                        type: 'system',
                                                        action: 'no_villages',
                                                        tehsil: tehsil,
                                                        message: `No villages found for Tehsil: ${tehsil.sroName} (${tehsil.sroCode})`
                                                });
                                        }
                                } else {
                                        addLogEntry({
                                                type: 'system',
                                                action: 'villages_error',
                                                tehsil: tehsil,
                                                message: `Invalid village data format for Tehsil: ${tehsil.sroName} (${tehsil.sroCode})`
                                        });
                                }
                        } catch (error) {
                                console.error('Error fetching villages:', error);
                                addLogEntry({
                                        type: 'system',
                                        action: 'tehsil_error',
                                        tehsil: tehsil,
                                        message: `Error processing Tehsil ${tehsil.sroName} (${tehsil.sroCode}): ${error.message}`
                                });
                        } finally {
                                setLoadingVillages(false);
                        }

                        // Check for cancellation after processing the tehsil
                        if (cancelProcessingRef.current) {
                                break;
                        }

                        // Small delay between tehsils
                        await new Promise(resolve => setTimeout(resolve, 1000));
                }

                addLogEntry({
                        type: 'system',
                        action: 'complete_all_tehsils',
                        message: `Completed processing all Tehsils (${tehsils.length})`
                });

                // Reset processing state
                setIsProcessingAllTehsils(false);
        };

        // Updated function to start auto processing for a specific tehsil
        const startAutoProcessing = async (tehsil, villages, isPartOfAllTehsils = false) => {
                if (!villages || villages.length === 0) return;

                if (!isPartOfAllTehsils) {
                        // Only set this if not already processing all tehsils
                        setIsProcessingBatch(true);
                }

                // Process the villages using the queue system
                await processVillagesWithQueue(villages, tehsil);

                // Reset processing state if not part of all tehsils processing
                if (!isPartOfAllTehsils) {
                        setIsProcessingBatch(false);
                }

                return true;
        };

        // Improved fetchPropertyData function for concurrent requests
        const fetchPropertyData = async (village = selectedVillage, tehsil = selectedTehsil, district = selectedDistrict, isBatchProcessing = false) => {
                if (!district || !tehsil || !village) {
                        return false;
                }

                if (!isBatchProcessing) {
                        setFetchStatus('loading');
                }

                // Create timestamp and unique request ID
                const timestamp = new Date().toLocaleTimeString();
                const requestId = `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

                // Add this request to active requests
                activeRequestsRef.current.add(requestId);

                try {
                        // API call to fetch property data
                        const requestBody = {
                                districtCode: district.code,
                                sroCode: tehsil.sroCode,
                                gaonCode1: village.value,
                                propertyId: '',
                                propNEWAddress: '1'
                        };

                        // Add to request history
                        const historyItem = {
                                timestamp,
                                requestId,
                                district: district,
                                tehsil: tehsil,
                                village: village,
                                status: 'pending',
                                message: `Fetching data for ${getDisplayName(village)} (${village.value})`
                        };

                        setRequestHistory(prev => [historyItem, ...prev]);

                        // Add API call to log
                        addLogEntry({
                                type: 'api',
                                action: 'api_request',
                                requestId,
                                district: district,
                                tehsil: tehsil,
                                village: village,
                                status: 'pending',
                                message: `API Request: districtCode=${district.code}, sroCode=${tehsil.sroCode}, gaonCode1=${village.value}`,
                                requestBody
                        });

                        // Check if processing was cancelled before making the request
                        if (cancelProcessingRef.current) {
                                throw new Error('Processing cancelled by user');
                        }

                        // Make the actual API call to fetch property data
                        const response = await fetch(`${base_url}/api/property-data`, {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(requestBody)
                        });

                        if (!response.ok) {
                                throw new Error(`Failed to fetch property data: ${response.status} ${response.statusText}`);
                        }

                        const responseData = await response.json();

                        // Update history item status to success using the requestId
                        setRequestHistory(prev =>
                                prev.map(item =>
                                        item.requestId === requestId
                                                ? {
                                                        ...item,
                                                        status: 'success',
                                                        message: `Successfully fetched data for ${getDisplayName(village)} (${village.value})`
                                                }
                                                : item
                                )
                        );

                        // Add API response to log
                        addLogEntry({
                                type: 'api',
                                action: 'api_response',
                                requestId,
                                district: district,
                                tehsil: tehsil,
                                village: village,
                                status: 'success',
                                message: `API Response: Success for ${getDisplayName(village)} (${village.value})`,
                                responseStatus: response.status
                        });

                        if (!isBatchProcessing) {
                                setFetchStatus('success');
                                // Show success message for 2 seconds then reset
                                setTimeout(() => {
                                        setFetchStatus(null);
                                }, 2000);
                        }

                        // Remove from active requests
                        activeRequestsRef.current.delete(requestId);

                        return true;
                } catch (error) {
                        console.error('Error fetching property data:', error);

                        // Update history item status to error
                        setRequestHistory(prev =>
                                prev.map(item =>
                                        item.requestId === requestId
                                                ? {
                                                        ...item,
                                                        status: 'error',
                                                        message: `Error fetching data for ${getDisplayName(village)} (${village.value}): ${error.message}`
                                                }
                                                : item
                                )
                        );

                        // Add API error to log
                        addLogEntry({
                                type: 'api',
                                action: 'api_error',
                                requestId,
                                district: district,
                                tehsil: tehsil,
                                village: village,
                                status: 'error',
                                message: `API Error: ${error.message} for ${getDisplayName(village)} (${village.value})`,
                                error: error.message
                        });

                        if (!isBatchProcessing) {
                                setFetchStatus('error');
                                // Show error message for 2 seconds then reset
                                setTimeout(() => {
                                        setFetchStatus(null);
                                }, 2000);
                        }

                        // Remove from active requests
                        activeRequestsRef.current.delete(requestId);

                        return false;
                }
        };

        // Fetch SROs/Tehsils for a selected district
        const fetchTehsils = async (districtCode) => {
                setLoadingTehsils(true);
                setTehsilError(null);
                setTehsils([]);

                try {
                        addLogEntry({
                                type: 'system',
                                action: 'fetch_tehsils',
                                district: selectedDistrict,
                                message: `Fetching tehsils for district ${districtCode}`
                        });

                        const response = await fetch(`${base_url}/district/api/sros/${districtCode}`);

                        if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const data = await response.json();
                        console.log("data", data)

                        if (data) {
                                // Format the tehsils for our component
                                const formattedTehsils = data.map(sro => ({
                                        code: sro.sroCode,
                                        name: sro.sroName,
                                        nameEn: sro.sroName
                                }));

                                setTehsils(data);

                                addLogEntry({
                                        type: 'system',
                                        action: 'fetch_tehsils_success',
                                        district: selectedDistrict,
                                        message: `Successfully fetched ${formattedTehsils.length} tehsils for district ${districtCode}`
                                });
                        } else {
                                setTehsils([]);
                                addLogEntry({
                                        type: 'system',
                                        action: 'fetch_tehsils_error',
                                        district: selectedDistrict,
                                        message: 'Invalid tehsil data format received'
                                });
                        }
                } catch (error) {
                        console.error('Error fetching tehsils:', error);
                        setTehsilError(error.message);

                        addLogEntry({
                                type: 'system',
                                action: 'fetch_tehsils_error',
                                district: selectedDistrict,
                                message: `Error fetching tehsils: ${error.message}`
                        });
                } finally {
                        setLoadingTehsils(false);
                }
        };
        console.log(tehsils)

        // Fetch villages for a selected district and tehsil
        const fetchVillages = async (districtCode, sroCode, tehsil) => {
                console.log("fetchVillages", districtCode, sroCode)
                setLoadingVillages(true);
                setVillageError(null);
                setVillages([]);

                try {
                        addLogEntry({
                                type: 'system',
                                action: 'fetch_villages',
                                district: selectedDistrict,
                                tehsil: selectedTehsil,
                                message: `Fetching villages for district ${districtCode} and SRO ${sroCode}`
                        });

                        // First try to get villages from our database
                        const response = await fetch(`${base_url}/village/api/villages?districtCode=${districtCode}&sroCode=${sroCode}&limit=1000`);

                        if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const data = await response.json();

                        if (data.success && Array.isArray(data.villages)) {
                                if (data.villages.length > 0) {
                                        // We have villages in the database
                                        const formattedVillages = data.villages.map(village => ({
                                                value: village.villageCode,
                                                name: village.villageName,
                                                nameEn: village.villageName
                                        }));

                                        setVillages(formattedVillages);
                                        setFilteredVillages(formattedVillages);

                                        // Start auto processing if not already processing all tehsils
                                        if (!isProcessingAllTehsils) {
                                                startAutoProcessing(tehsil, formattedVillages);
                                        }

                                        addLogEntry({
                                                type: 'system',
                                                action: 'fetch_villages_success',
                                                district: selectedDistrict,
                                                tehsil: selectedTehsil,
                                                message: `Successfully fetched ${formattedVillages.length} villages from database`
                                        });
                                } else {
                                        // No villages in database, try to scrape them
                                        addLogEntry({
                                                type: 'system',
                                                action: 'scrape_villages',
                                                district: selectedDistrict,
                                                tehsil: selectedTehsil,
                                                message: `No villages in database, scraping from source for district ${districtCode} and SRO ${sroCode}`
                                        });

                                        const scrapeResponse = await fetch(`${base_url}/village/api/scrape-villages?districtCode=${districtCode}&sroCode=${sroCode}`);

                                        if (!scrapeResponse.ok) {
                                                throw new Error(`HTTP error during scraping! Status: ${scrapeResponse.status}`);
                                        }

                                        const scrapeData = await scrapeResponse.json();

                                        if (scrapeData.success && Array.isArray(scrapeData.villages)) {
                                                // Format the scraped villages
                                                const formattedVillages = scrapeData.villages.map(village => ({
                                                        value: village.villageCode,
                                                        name: village.villageName,
                                                        nameEn: village.villageName
                                                }));

                                                // Fetch all villages again after scraping
                                                const refreshResponse = await fetch(`${base_url}/api/villages?districtCode=${districtCode}&sroCode=${sroCode}&limit=1000`);
                                                const refreshData = await refreshResponse.json();

                                                if (refreshData.success && Array.isArray(refreshData.villages)) {
                                                        const refreshedVillages = refreshData.villages.map(village => ({
                                                                value: village.villageCode,
                                                                name: village.villageName,
                                                                nameEn: village.villageName
                                                        }));

                                                        setVillages(refreshedVillages);
                                                        setFilteredVillages(refreshedVillages);
                                                } else {
                                                        // Fall back to the scraped sample
                                                        setVillages(formattedVillages);
                                                        setFilteredVillages(formattedVillages);
                                                }

                                                addLogEntry({
                                                        type: 'system',
                                                        action: 'scrape_villages_success',
                                                        district: selectedDistrict,
                                                        tehsil: selectedTehsil,
                                                        message: `Successfully scraped villages for district ${districtCode} and SRO ${sroCode}`
                                                });
                                        } else {
                                                setVillages([]);
                                                setFilteredVillages([]);
                                                addLogEntry({
                                                        type: 'system',
                                                        action: 'scrape_villages_error',
                                                        district: selectedDistrict,
                                                        tehsil: selectedTehsil,
                                                        message: 'Failed to scrape villages or invalid data format received'
                                                });
                                        }
                                }
                        } else {
                                setVillages([]);
                                setFilteredVillages([]);
                                addLogEntry({
                                        type: 'system',
                                        action: 'fetch_villages_error',
                                        district: selectedDistrict,
                                        tehsil: selectedTehsil,
                                        message: 'Invalid village data format received'
                                });
                        }
                } catch (error) {
                        console.error('Error fetching/scraping villages:', error);
                        setVillageError(error.message);

                        addLogEntry({
                                type: 'system',
                                action: 'fetch_villages_error',
                                district: selectedDistrict,
                                tehsil: selectedTehsil,
                                message: `Error fetching/scraping villages: ${error.message}`
                        });
                } finally {
                        setLoadingVillages(false);
                }
        };

        console.log("v", villages)

        // Handle district selection
        const handleDistrictSelect = (district) => {
                setSelectedDistrict(district);
                setSelectedTehsil(null);
                setSelectedVillage(null);
                setFilteredVillages([]);
                setVillages([]);
                setSearchTerm('');

                addLogEntry({
                        type: 'user',
                        action: 'select_district',
                        district: district,
                        message: `User selected District: ${getDisplayName(district)} (${district.code})`
                });

                // Fetch tehsils for this district
                fetchTehsils(district.code);
        };

        console.log("villages", villages)

        // Handle tehsil selection
        const handleTehsilSelect = (tehsil) => {
                console.log("thesil", tehsil)
                setSelectedTehsil(tehsil);
                setSelectedVillage(null);
                setSearchTerm('');

                addLogEntry({
                        type: 'user',
                        action: 'select_tehsil',
                        district: selectedDistrict,
                        tehsil: tehsil,
                        message: `User selected Tehsil: ${getDisplayName(tehsil)} (${tehsil.sroCode})`
                });

                // Fetch villages for this tehsil
                fetchVillages(selectedDistrict.code, tehsil.sroCode, tehsil);
        };

        // Handle village selection
        const handleVillageSelect = (village) => {
                setSelectedVillage(village);

                addLogEntry({
                        type: 'user',
                        action: 'select_village',
                        district: selectedDistrict,
                        tehsil: selectedTehsil,
                        village: village,
                        message: `User selected Village: ${getDisplayName(village)} (${village.value})`
                });

                // Auto-fetch property data when a village is selected
                fetchPropertyData(village);
        };

        // Handle search input change
        const handleSearchChange = (e) => {
                const term = e.target.value;
                setSearchTerm(term);

                if (villages.length > 0) {
                        const filtered = term
                                ? villages.filter(village =>
                                        language === 'english'
                                                ? village.nameEn.toLowerCase().includes(term.toLowerCase())
                                                : village.name.toLowerCase().includes(term.toLowerCase()))
                                : villages;

                        setFilteredVillages(filtered);
                }
        };

        // Stop all processing
        const stopAllProcessing = () => {
                // Set cancellation flag to true
                cancelProcessingRef.current = true;

                // Reset processing states
                setIsProcessingBatch(false);
                setIsProcessingAllTehsils(false);

                // Cancel any active network requests if possible
                // This depends on browser support and may not cancel all in-flight requests
                activeRequestsRef.current.forEach(() => {
                        // If using AbortControllers, you would abort them here
                });

                // Clear the active requests set
                activeRequestsRef.current.clear();

                addLogEntry({
                        type: 'user',
                        action: 'stop_processing',
                        message: 'User stopped all automatic processing'
                });
        };

        // Function to export logs to a text file
        const exportLogs = () => {
                // Create a formatted string with all log entries
                const logText = logEntriesRef.current.map(entry => {
                        const date = new Date(entry.timestamp).toLocaleString();
                        let logLine = `[${date}] `;

                        if (entry.type === 'user') {
                                logLine += `USER ACTION: ${entry.action} - ${entry.message}`;
                        } else if (entry.type === 'system') {
                                logLine += `SYSTEM: ${entry.action} - ${entry.message}`;
                        } else if (entry.type === 'api') {
                                const districtInfo = entry.district ? `${getDisplayName(entry.district)} (${entry.district.code})` : 'N/A';
                                const tehsilInfo = entry.tehsil ? `${getDisplayName(entry.tehsil)} (${entry.tehsil.sroCode})` : 'N/A';
                                const villageInfo = entry.village ? `${getDisplayName(entry.village)} (${entry.village.value})` : 'N/A';

                                logLine += `API ${entry.action.toUpperCase()}: [Status: ${entry.status}] [District: ${districtInfo}] [Tehsil: ${tehsilInfo}] [Village: ${villageInfo}] - ${entry.message}`;
                        }

                        return logLine;
                }).join('\n');

                // Create a blob with the log text
                const blob = new Blob([logText], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);

                // Create a link element and trigger download
                const a = document.createElement('a');
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                a.href = url;
                a.download = `property-data-log-${timestamp}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                setExportStatus('success');
                setTimeout(() => {
                        setExportStatus(null);
                }, 2000);

                addLogEntry({
                        type: 'system',
                        action: 'export_logs',
                        message: `User exported logs to file: property-data-log-${timestamp}.txt`
                });
        };

        // Navigate to saved records page
        const navigateToSavedRecords = () => {
                navigate('/saved-records');
        };

        // Get displayed name based on current language
        const getDisplayName = (item) => {
                if (!item) return '';
                return language === 'english' ? (item.nameEn || item.sroName || item.name) : (item.name || item.sroName || item.nameEn);
        };

        // Clear request history
        const clearHistory = () => {
                setRequestHistory([]);

                addLogEntry({
                        type: 'user',
                        action: 'clear_history',
                        message: 'User cleared request history'
                });
        };

        // Toggle console visibility
        const toggleConsole = () => {
                setShowConsole(!showConsole);
        };

        // Toggle history visibility
        const toggleHistory = () => {
                setShowHistory(!showHistory);
        };

        // Toggle logs visibility
        const toggleLogs = () => {
                setShowLogs(!showLogs);
        };

        return (
                <div className="flex flex-row min-h-screen bg-gray-50">
                        {/* Main Dashboard */}
                        <div className="flex-1 p-6 overflow-y-auto">
                                <header className="text-center mb-8 relative">
                                        {/* Language toggle button */}
                                        <button
                                                onClick={toggleLanguage}
                                                className="absolute right-0 top-0 px-3 py-2 bg-white rounded-full shadow-md flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                                        >
                                                <Globe className="h-5 w-5 text-blue-600" />
                                                <span className="text-sm font-medium">{language === 'english' ? 'हिंदी' : 'English'}</span>
                                        </button>

                                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{text.title}</h1>
                                        <p className="text-gray-600">{text.subtitle}</p>
                                </header>

                                {/* View Saved Records Button */}
                                <div className="mb-8 flex justify-end">
                                        <button
                                                onClick={navigateToSavedRecords}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md flex items-center space-x-2 hover:bg-green-700 transition-colors"
                                        >
                                                <Database className="h-5 w-5" />
                                                <span>{text.viewSavedRecords}</span>
                                        </button>
                                </div>

                                {/* Concurrent Request Settings */}
                                <div className="mb-6 flex justify-between items-center">
                                        <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-md">
                                                <label className="text-gray-700 font-medium">Max Concurrent Requests:</label>
                                                <select
                                                        className="border rounded px-2 py-1"
                                                        value={maxConcurrentRequests}
                                                        onChange={(e) => setMaxConcurrentRequests(parseInt(e.target.value))}
                                                >
                                                        <option value="1">1 (Sequential)</option>
                                                        <option value="3">3 requests at once</option>
                                                        <option value="5">5 requests at once</option>
                                                        <option value="10">10 requests at once</option>
                                                        <option value="20">20 requests at once</option>
                                                        <option value="30">30 requests at once</option>
                                                        <option value="50">50 requests at once</option>
                                                </select>
                                        </div>

                                        <button
                                                onClick={exportLogs}
                                                className={`px-4 py-2 text-white rounded-lg shadow-md flex items-center space-x-2 transition-colors ${exportStatus === 'success'
                                                        ? 'bg-green-600'
                                                        : 'bg-blue-600 hover:bg-blue-700'
                                                        }`}
                                        >
                                                <FileText className="h-5 w-5" />
                                                <span>{exportStatus === 'success' ? text.logsExported : text.exportLogs}</span>
                                        </button>
                                </div>

                                {/* District selection */}
                                <section className="mb-8">
                                        <h2 className="text-xl font-semibold text-gray-700 mb-4">{text.selectDistrict}</h2>

                                        {loadingDistricts ? (
                                                <div className="text-center py-4">
                                                        <p className="text-gray-600">{text.loadingDistricts}</p>
                                                </div>
                                        ) : districtError ? (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                                        <span className="block sm:inline">{text.fetchDistrictError} {districtError}</span>
                                                </div>
                                        ) : districts.length === 0 ? (
                                                <div className="text-center py-4">
                                                        <p className="text-gray-600">{text.noDistricts}</p>
                                                </div>
                                        ) : (
                                                <div className="flex flex-wrap gap-3">
                                                        {districts.map((district) => (
                                                                <button
                                                                        key={district.code}
                                                                        onClick={() => handleDistrictSelect(district)}
                                                                        className={`px-4 py-2 rounded-full transition-all ${selectedDistrict?.code === district.code
                                                                                ? 'bg-blue-600 text-white shadow-lg'
                                                                                : 'bg-white text-gray-700 shadow hover:shadow-md hover:bg-blue-50'
                                                                                }`}
                                                                >
                                                                        {getDisplayName(district)} ({district.code})
                                                                </button>
                                                        ))}
                                                </div>
                                        )}
                                </section>

                                {/* Tehsil selection - only show if district is selected */}
                                {selectedDistrict && (
                                        <section className="mb-8">
                                                <h2 className="text-xl font-semibold text-gray-700 mb-4">{text.selectTehsil}</h2>

                                                {loadingTehsils ? (
                                                        <div className="text-center py-4">
                                                                <p className="text-gray-600">{text.loadingTehsils}</p>
                                                        </div>
                                                ) : tehsilError ? (
                                                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                                                <span className="block sm:inline">{text.fetchTehsilError} {tehsilError}</span>
                                                        </div>
                                                ) : tehsils.length === 0 ? (
                                                        <div className="text-center py-4">
                                                                <p className="text-gray-600">{text.noTehsils}</p>
                                                        </div>
                                                ) : (
                                                        <div className="flex flex-wrap gap-3">
                                                                {tehsils.map((tehsil) => (
                                                                        <button
                                                                                key={tehsil.sroCode}
                                                                                onClick={() => handleTehsilSelect(tehsil)}
                                                                                className={`px-4 py-2 rounded-full transition-all ${selectedTehsil?.sroCode === tehsil.sroCode
                                                                                        ? 'bg-blue-600 text-white shadow-lg'
                                                                                        : 'bg-white text-gray-700 shadow hover:shadow-md hover:bg-blue-50'
                                                                                        }`}
                                                                        >
                                                                                {tehsil.sroName} ({tehsil.sroCode})
                                                                        </button>
                                                                ))}
                                                        </div>
                                                )}
                                        </section>
                                )}

                                {/* Village selection */}
                                {selectedTehsil && (
                                        <section>
                                                <div className="bg-white p-5 rounded-xl shadow-md">
                                                        <div className="flex items-center justify-between mb-6">
                                                                <h2 className="text-xl font-semibold text-gray-700">
                                                                        {getDisplayName(selectedDistrict)} - {getDisplayName(selectedTehsil)} {text.villagesOf} - {filteredVillages?.length}
                                                                </h2>

                                                                <div className="flex gap-3">
                                                                        {/* Search box */}
                                                                        <div className="relative w-72">
                                                                                <input
                                                                                        type="text"
                                                                                        placeholder={text.searchPlaceholder}
                                                                                        value={searchTerm}
                                                                                        onChange={handleSearchChange}
                                                                                        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                                                />
                                                                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                                        </div>

                                                                        {/* Auto-Process Button */}
                                                                        <button
                                                                                onClick={startAllTehsilsProcessing}
                                                                                disabled={!selectedDistrict || tehsils.length === 0 || isProcessingBatch || isProcessingAllTehsils}
                                                                                className={`px-4 py-2 rounded-lg shadow flex items-center space-x-2 ${!selectedDistrict || tehsils.length === 0 || isProcessingBatch || isProcessingAllTehsils
                                                                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                                                        : 'bg-purple-600 text-white hover:bg-purple-700'
                                                                                        } transition-colors`}
                                                                        >
                                                                                <Database className="h-5 w-5 mr-1" />
                                                                                <span>{text.autoFetch}</span>
                                                                        </button>

                                                                        {/* Fetch Data Button */}
                                                                        <button
                                                                                onClick={() => fetchPropertyData()}
                                                                                disabled={!selectedVillage || fetchStatus === 'loading'}
                                                                                className={`px-4 py-2 rounded-lg shadow flex items-center space-x-2 ${!selectedVillage
                                                                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                                                        : fetchStatus === 'loading'
                                                                                                ? 'bg-blue-400 text-white cursor-wait'
                                                                                                : fetchStatus === 'success'
                                                                                                        ? 'bg-green-600 text-white'
                                                                                                        : fetchStatus === 'error'
                                                                                                                ? 'bg-red-600 text-white'
                                                                                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                                                                        } transition-colors`}
                                                                        >
                                                                                <span>
                                                                                        {fetchStatus === 'loading'
                                                                                                ? text.fetchingData
                                                                                                : fetchStatus === 'success'
                                                                                                        ? text.fetchSuccess
                                                                                                        : fetchStatus === 'error'
                                                                                                                ? text.fetchError
                                                                                                                : text.fetchData}
                                                                                </span>
                                                                        </button>
                                                                </div>
                                                        </div>

                                                        {loadingVillages ? (
                                                                <div className="text-center py-10">
                                                                        <p className="text-gray-600">{text.loadingVillages}</p>
                                                                </div>
                                                        ) : (
                                                                <>
                                                                        {/* Village grid */}
                                                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                                                {filteredVillages.map((village) => (
                                                                                        <div
                                                                                                key={village.value}
                                                                                                className={`p-3 rounded-lg border transition-colors cursor-pointer ${selectedVillage?.value === village.value
                                                                                                        ? 'bg-blue-100 border-blue-400'
                                                                                                        : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                                                                                                        }`}
                                                                                                onClick={() => handleVillageSelect(village)}
                                                                                        >
                                                                                                <div className="font-medium">{getDisplayName(village)}</div>
                                                                                                <div className="text-sm text-gray-500">{text.code}: {village.value}</div>
                                                                                        </div>
                                                                                ))}
                                                                        </div>

                                                                        {/* Empty state */}
                                                                        {filteredVillages.length === 0 && !loadingVillages && (
                                                                                <div className="text-center py-10 text-gray-500">
                                                                                        {searchTerm ? text.noResultsSearch : text.noResults}
                                                                                </div>
                                                                        )}
                                                                </>
                                                        )}

                                                        {/* Batch processing info for main dashboard */}
                                                        {(isProcessingBatch || isProcessingAllTehsils) && (
                                                                <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-blue-500 max-w-md z-50">
                                                                        <div className="font-medium text-gray-800 flex justify-between">
                                                                                <span>{text.batchProgress}</span>
                                                                                <span className="font-bold">{processingStats.completed}/{processingStats.total}</span>
                                                                        </div>

                                                                        {batchProgress.totalBatches > 0 && (
                                                                                <div className="text-xs text-gray-600 flex justify-between mt-1">
                                                                                        <span>Batch {batchProgress.currentBatch}/{batchProgress.totalBatches}</span>
                                                                                        <span>({batchProgress.currentBatchProgress}/{batchProgress.batchSize} in current batch)</span>
                                                                                </div>
                                                                        )}

                                                                        <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
                                                                                <div
                                                                                        className="bg-blue-600 h-2.5 rounded-full transition-all"
                                                                                        style={{ width: `${processingStats.total > 0 ? (processingStats.completed / processingStats.total) * 100 : 0}%` }}
                                                                                ></div>
                                                                        </div>
                                                                        <div className="flex justify-between text-sm">
                                                                                <span className="text-green-600">{text.success} {processingStats.success}</span>
                                                                                <span className="text-red-600">{text.failed} {processingStats.failed}</span>
                                                                        </div>
                                                                        <button
                                                                                onClick={stopAllProcessing}
                                                                                className="mt-2 w-full bg-red-600 text-white text-xs px-2 py-1 rounded"
                                                                        >
                                                                                {text.stopProcessing}
                                                                        </button>
                                                                </div>
                                                        )}
                                                </div>
                                        </section>
                                )}
                        </div>

                        {/* Side Console - toggle visibility with button */}
                        <div className={`bg-gray-900 text-white transition-all duration-300 ${showConsole ? 'w-96' : 'w-12'}`}>
                                <div className="h-full flex flex-col">
                                        {/* Console Header */}
                                        <div className="flex items-center justify-between p-3 border-b border-gray-700">
                                                {showConsole ? (
                                                        <>
                                                                <div className="flex items-center">
                                                                        <Terminal className="h-5 w-5 mr-2" />
                                                                        <h3 className="font-medium">{text.consoleTitle}</h3>
                                                                </div>
                                                                <button
                                                                        onClick={toggleConsole}
                                                                        className="text-gray-400 hover:text-white"
                                                                >
                                                                        <X className="h-5 w-5" />
                                                                </button>
                                                        </>
                                                ) : (
                                                        <button
                                                                onClick={toggleConsole}
                                                                className="w-full flex justify-center text-gray-400 hover:text-white"
                                                        >
                                                                <Terminal className="h-5 w-5" />
                                                        </button>
                                                )}
                                        </div>

                                        {/* Console Content */}
                                        {showConsole && (
                                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                                        {/* Current Selection Info */}
                                                        <div className="bg-gray-800 rounded-lg p-3 space-y-2">
                                                                <div className="flex items-center justify-between">
                                                                        <span className="text-green-400 font-semibold">{text.autoFetch}</span>
                                                                        {(isProcessingBatch || isProcessingAllTehsils) && (
                                                                                <button
                                                                                        onClick={stopAllProcessing}
                                                                                        className="bg-red-600 text-white text-xs px-2 py-1 rounded"
                                                                                >
                                                                                        {text.stopProcessing}
                                                                                </button>
                                                                        )}
                                                                </div>

                                                                {/* Concurrent Processing Status */}
                                                                {(isProcessingBatch || isProcessingAllTehsils) && (
                                                                        <div className="mt-2 bg-gray-700 p-2 rounded">
                                                                                <div className="flex justify-between text-xs mb-1">
                                                                                        <span>Concurrent Requests:</span>
                                                                                        <span>{maxConcurrentRequests}</span>
                                                                                </div>
                                                                                <div className="flex justify-between text-xs mb-1">
                                                                                        <span>{text.batchProgress}</span>
                                                                                        <span>{processingStats.completed}/{processingStats.total}</span>
                                                                                </div>
                                                                                <div className="w-full bg-gray-600 rounded-full h-2.5">
                                                                                        <div
                                                                                                className="bg-blue-500 h-2.5 rounded-full"
                                                                                                style={{ width: `${processingStats.total > 0 ? (processingStats.completed / processingStats.total) * 100 : 0}%` }}
                                                                                        ></div>
                                                                                </div>
                                                                                <div className="flex justify-between text-xs mt-1">
                                                                                        <span className="text-green-400">{text.success} {processingStats.success}</span>
                                                                                        <span className="text-red-400">{text.failed} {processingStats.failed}</span>
                                                                                </div>
                                                                        </div>
                                                                )}

                                                                <div>
                                                                        <p className="text-gray-400 text-sm">{text.currentDistrict}</p>
                                                                        <p className="font-mono">
                                                                                {selectedDistrict
                                                                                        ? `${getDisplayName(selectedDistrict)} (${selectedDistrict.code})`
                                                                                        : text.noSelection
                                                                                }
                                                                        </p>
                                                                </div>
                                                                <div>
                                                                        <p className="text-gray-400 text-sm">{text.currentTehsil}</p>
                                                                        <p className="font-mono">
                                                                                {selectedTehsil
                                                                                        ? `${selectedTehsil.sroName} (${selectedTehsil.sroCode})`
                                                                                        : text.noSelection
                                                                                }
                                                                        </p>
                                                                </div>
                                                                <div>
                                                                        <p className="text-gray-400 text-sm">{text.currentVillage}</p>
                                                                        <p className="font-mono">
                                                                                {selectedVillage
                                                                                        ? `${getDisplayName(selectedVillage)} (${selectedVillage.value})`
                                                                                        : text.noSelection
                                                                                }
                                                                        </p>
                                                                </div>
                                                        </div>

                                                        {/* Log Export Section */}
                                                        <div className="bg-gray-800 rounded-lg p-3">
                                                                <button
                                                                        onClick={exportLogs}
                                                                        className="w-full py-2 bg-blue-600 text-white rounded flex items-center justify-center gap-2 hover:bg-blue-700"
                                                                >
                                                                        <Download className="h-4 w-4" />
                                                                        <span>{text.downloadLogs}</span>
                                                                </button>
                                                        </div>

                                                        {/* Request History Section */}
                                                        <div className="bg-gray-800 rounded-lg p-3">
                                                                <div
                                                                        className="flex items-center justify-between cursor-pointer"
                                                                        onClick={toggleHistory}
                                                                >
                                                                        <h4 className="font-medium">{text.requestsHistory}</h4>
                                                                        <button className="text-gray-400 hover:text-white">
                                                                                {showHistory ? (
                                                                                        <ChevronUp className="h-4 w-4" />
                                                                                ) : (
                                                                                        <ChevronDown className="h-4 w-4" />
                                                                                )}
                                                                        </button>
                                                                </div>

                                                                {showHistory && (
                                                                        <>
                                                                                {requestHistory.length > 0 ? (
                                                                                        <div className="mt-2 space-y-2">
                                                                                                <div className="flex justify-end">
                                                                                                        <button
                                                                                                                onClick={clearHistory}
                                                                                                                className="text-xs text-gray-400 hover:text-white"
                                                                                                        >
                                                                                                                {text.clearHistory}
                                                                                                        </button>
                                                                                                </div>

                                                                                                <div className="max-h-60 overflow-y-auto space-y-2">
                                                                                                        {requestHistory.map((item, index) => (
                                                                                                                <div key={index} className={`text-xs p-2 rounded ${item.status === 'batch-start' || item.status === 'batch-complete'
                                                                                                                        ? 'bg-blue-900'
                                                                                                                        : 'bg-gray-700'
                                                                                                                        }`}>
                                                                                                                        <div className="flex justify-between">
                                                                                                                                <span>{item.timestamp}</span>
                                                                                                                                <span className={
                                                                                                                                        item.status === 'success' ? 'text-green-400' :
                                                                                                                                                item.status === 'error' ? 'text-red-400' :
                                                                                                                                                        item.status === 'batch-start' ? 'text-blue-400' :
                                                                                                                                                                item.status === 'batch-complete' ? 'text-blue-400' :
                                                                                                                                                                        item.status === 'progress' ? 'text-blue-300' :
                                                                                                                                                                                'text-yellow-400'
                                                                                                                                }>
                                                                                                                                        {item.status}
                                                                                                                                </span>
                                                                                                                        </div>
                                                                                                                        <p className="mt-1 text-gray-300 break-words">{item.message}</p>
                                                                                                                </div>
                                                                                                        ))}
                                                                                                </div>
                                                                                        </div>
                                                                                ) : (
                                                                                        <p className="text-gray-500 text-sm mt-2">No requests yet</p>
                                                                                )}
                                                                        </>
                                                                )}
                                                        </div>

                                                        {/* Logs Section */}
                                                        <div className="bg-gray-800 rounded-lg p-3">
                                                                <div
                                                                        className="flex items-center justify-between cursor-pointer"
                                                                        onClick={toggleLogs}
                                                                >
                                                                        <h4 className="font-medium">{text.logsSection}</h4>
                                                                        <button className="text-gray-400 hover:text-white">
                                                                                {showLogs ? (
                                                                                        <ChevronUp className="h-4 w-4" />
                                                                                ) : (
                                                                                        <ChevronDown className="h-4 w-4" />
                                                                                )}
                                                                        </button>
                                                                </div>

                                                                {showLogs && (
                                                                        <>
                                                                                {logEntries.length > 0 ? (
                                                                                        <div className="mt-2">
                                                                                                <div className="max-h-60 overflow-y-auto space-y-1">
                                                                                                        {logEntries.slice(0, 50).map((entry, index) => (
                                                                                                                <div key={index} className="text-xs p-1 border-b border-gray-700">
                                                                                                                        <div className="flex justify-between">
                                                                                                                                <span className="text-gray-400">
                                                                                                                                        {new Date(entry.timestamp).toLocaleTimeString()}
                                                                                                                                </span>
                                                                                                                                <span className={
                                                                                                                                        entry.type === 'api'
                                                                                                                                                ? (entry.status === 'success' ? 'text-green-400' :
                                                                                                                                                        entry.status === 'error' ? 'text-red-400' : 'text-yellow-400')
                                                                                                                                                : entry.type === 'system' ? 'text-blue-400' : 'text-purple-400'
                                                                                                                                }>
                                                                                                                                        {entry.type.toUpperCase()}
                                                                                                                                </span>
                                                                                                                        </div>
                                                                                                                        <p className="mt-1 text-gray-300 text-xs break-words">{entry.message}</p>
                                                                                                                </div>
                                                                                                        ))}
                                                                                                        {logEntries.length > 50 && (
                                                                                                                <div className="text-xs text-center text-gray-500 p-1">
                                                                                                                        + {logEntries.length - 50} more entries (available in export)
                                                                                                                </div>
                                                                                                        )}
                                                                                                </div>
                                                                                        </div>
                                                                                ) : (
                                                                                        <p className="text-gray-500 text-sm mt-2">No logs yet</p>
                                                                                )}
                                                                        </>
                                                                )}
                                                        </div>
                                                </div>
                                        )}
                                </div>
                        </div>
                </div>
        );
};

export default DistrictVillageDashboardNew;